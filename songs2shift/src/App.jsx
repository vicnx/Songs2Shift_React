import { BrowserRouter as Router, Route, Routes, Navigate, HashRouter, useLocation } from 'react-router-dom';
import ConvertPage from './pages/ConvertPage';
import Login from 'pages/LoginSpotify';
import useApi from 'hooks/useApi';
import { Suspense, useEffect } from 'react';

import Loading from 'components/Loading';
import { globalFunctions } from 'global/functions';
import { SSMenubar } from 'components/SS_MenuBar/ss_menubar';
import SSSidebar from 'components/SS_Sidebar/ss_sidebar';
import { CONSTANTS } from 'global/constants';
import LoginDeezer from 'pages/LoginDeezer/LoginDeezer';
function App() {
	const { spotifyToken, deezerToken, saveTokenSpotify, saveTokenDeezer } = useApi();

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
		<>
			<Suspense fallback={<Loading loading={true} />}>
				<HashRouter>
					{spotifyToken ? (
						<>
							<SSMenubar />
							<SSSidebar />
							<Routes>
								<Route path={CONSTANTS.routes.home} element={<ConvertPage />} />
								<Route path={CONSTANTS.routes.loginDeezer} element={<LoginDeezer />} />
								<Route path="*" element={<Navigate to={CONSTANTS.routes.home} replace />} />
							</Routes>
						</>
					) : (
						<>
							<Routes>
								<Route path={CONSTANTS.routes.login} element={<Login />} />
								<Route path="*" element={<Navigate to={CONSTANTS.routes.login} replace />} />
							</Routes>
						</>
					)}
				</HashRouter>
			</Suspense>
		</>
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

export default App;
