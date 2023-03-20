import { BrowserRouter as Router, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import ConvertPage from './pages/ConvertPage';
import Login from 'pages/LoginSpotify';
import useApi from 'hooks/useApi';
import { Suspense, useEffect } from 'react';

import Loading from 'components/Loading';
import { globalFunctions } from 'global/functions';
import { SSmenubar } from 'components/SS_MenuBar/ss_menubar';
import SSSidebar from 'components/ss_sidebar';
import { CONSTANTS } from 'global/constants';
function App() {
	const { spotifyToken, saveTokenSpotify } = useApi();

	useEffect(() => {
		checkSpotifyLogin(saveTokenSpotify);
	}, [window.location.hash]);

	return (
		<>
			<Suspense fallback={<Loading loading={true} />}>
				<HashRouter>
					<SSmenubar />
					<SSSidebar/>
					<Routes>
						{spotifyToken ? (
							<>
								<Route path={CONSTANTS.routes.home} element={<ConvertPage />} />
								<Route path="*" element={<Navigate to={CONSTANTS.routes.home} replace />} />
							</>
						) : (
							<>
								<Route path={CONSTANTS.routes.login} element={<Login />} />
								<Route path="*" element={<Navigate to={CONSTANTS.routes.login} replace />} />
							</>
						)}
					</Routes>
				</HashRouter>
			</Suspense>
		</>
	);
}

const checkSpotifyLogin = async (saveTokenSpotify) => {
	if (window.location.hash.includes('access_token')) {
		let token = await globalFunctions.getHashToken();
		saveTokenSpotify(token);
		window.location.href = CONSTANTS.routes.base;
	}
};

export default App;
