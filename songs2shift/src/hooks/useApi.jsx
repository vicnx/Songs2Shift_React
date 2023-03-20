import { useState, useContext, useEffect } from 'react';
import SpotifyContext from 'context/SpotifyContext';
import DeezerContext from 'context/DeezerContext';
import SpotifyService from 'services/SpotifyApi';
import { useToast } from 'context/ToastContext';

export default function useApi() {
	const { spotifyPlaylists, setSpotifyPlaylists, spotifyToken, setSpotifyToken } = useContext(SpotifyContext);
	const { deezerApiKey, setDeezerApiKey } = useContext(DeezerContext);
	const [error, setError] = useState(null);
	const { showToast } = useToast();

	useEffect(() => {
		if(!spotifyToken){
			checkSession('spotify');
		}
	}, [spotifyToken])
	

	const saveTokenSpotify=(token) =>{
		setSpotifyToken(token);
		sessionStorage.setItem('spotifyToken', token);
	}

	const clearData = () => {
		sessionStorage.removeItem('spotifyToken');
		setSpotifyToken('');
	};

	const checkSession = (type)=>{
		switch (type) {
			case 'spotify':
				if(sessionStorage.getItem(spotifyToken)){
					setSpotifyToken(sessionStorage.getItem(spotifyToken))
				}
				break;
		
			default:
				break;
		}
	}

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

	return { deezerApiKey, setDeezerApiKey, error, spotifyPlaylists, getSpotifyPlaylists,  spotifyToken, setSpotifyToken, saveTokenSpotify };
}
