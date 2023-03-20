import { BrowserRouter as Router, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import ConvertPage from './pages/ConvertPage';
import Login from 'pages/LoginSpotify';
import useApi from 'hooks/useApi';
import { Suspense, useEffect } from 'react';

import Loading from 'components/Loading';
import { CONSTANTS } from 'global/constants';
import { globalFunctions } from 'global/functions';
function App() {
	const { spotifyToken, saveTokenSpotify } = useApi();

	useEffect(() => {
		checkSpotifyLogin(saveTokenSpotify);
	}, [window.location.hash])
	
	return (
		<>
			<Suspense fallback={<Loading loading={true} />}>
				<HashRouter>
					<Routes>
						{spotifyToken ? (
							<>
								<Route path="/home" element={<ConvertPage />} />
								<Route path="*" element={<Navigate to="/home" replace />} />
							</>
						) : (
							<>
								<Route path="/login" element={<Login />} />
								<Route path="*" element={<Navigate to="/login" replace />} />
							</>
						)}
					</Routes>
				</HashRouter>
			</Suspense>
		</>
	);
}

const checkSpotifyLogin = async (saveTokenSpotify) =>{
	if(window.location.hash.includes('access_token')){
		let token = await globalFunctions.getHashToken();
		saveTokenSpotify(token); 
		window.location.href = '/#/home';
	}
}

export default App;
