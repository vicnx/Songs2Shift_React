import { useState, useContext, useEffect } from 'react';
import SpotifyContext from 'context/SpotifyContext';
import DeezerContext from 'context/DeezerContext';
import SpotifyService from 'services/SpotifyApi';
import { useToast } from 'context/ToastContext';
import { CONSTANTS } from 'global/constants';
import { globalFunctions } from 'global/functions';
import DeezerService from 'services/DeezerApi';

export default function useApi() {
	const { spotifyPlaylists, setSpotifyPlaylists, spotifyToken, setSpotifyToken, spotifyUserData, setSpotifyUserData } = useContext(SpotifyContext);
	const { deezerToken, setDeezerToken, deezerUserData, setDeezerUserData } = useContext(DeezerContext);
	const [error, setError] = useState(null);
	const { showToast } = useToast();

	useEffect(() => {
		if (!spotifyToken) {
			checkSession(CONSTANTS.session.types.spotifyToken);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [spotifyToken]);

	const getUserInfoSpotify = (token) => {
		if (!checkSession(CONSTANTS.session.types.spotifyUserData)) {
			SpotifyService.getUserData(token)
				.then((res) => {
					const userData = {
						name: res.display_name,
						image: res.images[0].url,
						initials: globalFunctions.getInitials(res.display_name),
					};
					setSpotifyUserData(userData);
					sessionStorage.setItem(CONSTANTS.session.types.spotifyUserData, JSON.stringify(userData));
				})
				.catch((error) => {
					showToast(error.message, 'error');
				});
		}
	};

	const getUserInfoDeezer = (token) => {
		if (!checkSession(CONSTANTS.session.types.deezerUserData)) {
			DeezerService.getUserData(token)
				.then((res) => {
					console.log({ res });
					const userData = {
						name: res.name,
						image: res.picture,
						link: res.link,
						id: res.id,
					};
					setDeezerUserData(userData);
					sessionStorage.setItem(CONSTANTS.session.types.deezerUserData, JSON.stringify(userData));
				})
				.catch((error) => {
					showToast(error.message, 'error');
				});
		}
	};

	const saveTokenSpotify = async (token) => {
		setSpotifyToken(token);
		sessionStorage.setItem(CONSTANTS.session.types.spotifyToken, token);
	};

	const saveTokenDeezer = async (token) => {
		setDeezerToken(token);
		sessionStorage.setItem(CONSTANTS.session.types.deezerToken, token);
	};

	const clearData = () => {
		sessionStorage.removeItem(CONSTANTS.session.types.spotifyToken);
		sessionStorage.removeItem(CONSTANTS.session.types.deezerToken);
		setSpotifyToken('');
		setDeezerToken('');
	};

	const checkSession = (type) => {
		switch (type) {
			case CONSTANTS.session.types.spotifyToken:
				if (sessionStorage.getItem(CONSTANTS.session.types.spotifyToken)) {
					setSpotifyToken(sessionStorage.getItem(CONSTANTS.session.types.spotifyToken));
				}
				break;
			case CONSTANTS.session.types.spotifyUserData:
				if (sessionStorage.getItem(CONSTANTS.session.types.spotifyUserData)) {
					setSpotifyUserData(JSON.parse(sessionStorage.getItem(CONSTANTS.session.types.spotifyUserData)));
					return true;
				} else {
					return false;
				}
				// eslint-disable-next-line no-unreachable
				break;
			case CONSTANTS.session.types.deezerUserData:
				if (sessionStorage.getItem(CONSTANTS.session.types.deezerUserData)) {
					setDeezerUserData(JSON.parse(sessionStorage.getItem(CONSTANTS.session.types.deezerUserData)));
					return true;
				} else {
					return false;
				}
				// eslint-disable-next-line no-unreachable
				break;
			default:
				break;
		}
	};

	const getSpotifyPlaylists = () => {
		SpotifyService.getPlaylists(spotifyToken)
			.then((data) => {
				setSpotifyPlaylists(data.items);
			})
			.catch((error) => {
				showToast(error.message, 'error');
				clearData();
				// window.location.href = '/login'
			});
	};

	return {
		deezerToken,
		setDeezerToken,
		error,
		spotifyPlaylists,
		getSpotifyPlaylists,
		spotifyToken,
		setSpotifyToken,
		saveTokenSpotify,
		getUserInfoSpotify,
		spotifyUserData,
		saveTokenDeezer,
		getUserInfoDeezer,
	};
}
