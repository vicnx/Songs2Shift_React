import { HashRouter } from 'react-router-dom';
import useApi from 'hooks/useApi';
import { Suspense, useEffect } from 'react';

import Loading from 'components/Loading';
import { globalFunctions } from 'global/functions';
import { SSMenubar } from 'components/SS_MenuBar/ss_menubar';
import SSSidebar from 'components/SS_Sidebar/ss_sidebar';
import { CONSTANTS } from 'global/constants';
import SSRouter from 'router';

function App() {
	const { spotifyToken, deezerToken, saveTokenSpotify, saveTokenDeezer } = useApi();
	const isAuthenticated = spotifyToken ? true : false;

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const source = urlParams.get('source');
		switch (source) {
			case CONSTANTS.Deezer.source:
				if (!deezerToken) {
					checkDeezerLogin(saveTokenDeezer);
				}
				break;
			case CONSTANTS.Spotify.source:
				if (!spotifyToken) {
					checkSpotifyLogin(saveTokenSpotify);
				}
				break;
			default:
				break;
		}
	}, [window.location.hash]);

	return (
		<Suspense fallback={<Loading loading={true} />}>
			<HashRouter>
			<ShowMenuSidebar visible={isAuthenticated}/>
				<SSRouter isAuthenticated={isAuthenticated} />
			</HashRouter>
		</Suspense>
	);
}

const checkSpotifyLogin = async (saveTokenSpotify) => {
	if (window.location.hash.includes('access_token')) {
		let token = await globalFunctions.getHashToken();
		saveTokenSpotify(token).then((data) => {
			console.log(data);
			window.location.href = CONSTANTS.routes.base;
		});
	}
};

const checkDeezerLogin = async (saveTokenDeezer) => {
	if (window.location.hash.includes('access_token')) {
		let token = await globalFunctions.getHashToken();
		saveTokenDeezer(token).then((data) => {
			window.location.href = CONSTANTS.routes.base;
		});
	}
};

const ShowMenuSidebar = ({visible}) =>{
	return(
		visible? <><SSMenubar/> <SSSidebar/></>: null
	)
}

export default App;
