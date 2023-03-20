import { useState, useContext, useEffect } from 'react';
import SpotifyContext from 'context/SpotifyContext';
import DeezerContext from 'context/DeezerContext';
import SpotifyService from 'services/SpotifyApi';
import { useToast } from 'context/ToastContext';
import { useNavigate } from 'react-router';

export default function useApi() {
	const navigate = useNavigate();
	const { spotifyApiKey, setSpotifyApiKey, spotifyPlaylists, setSpotifyPlaylists, spotifyToken, setSpotifyToken } = useContext(SpotifyContext);
	const { deezerApiKey, setDeezerApiKey } = useContext(DeezerContext);
	const [error, setError] = useState(null);
	const { showToast } = useToast();

	useEffect(() => {
		console.log('useeffect');
		if(!spotifyToken){
			console.log('!spotifyToken');
			checkSession('spotify');
		}
	}, [spotifyToken])
	
	const saveApis = () => {
		if (spotifyApiKey && deezerApiKey) {
			sessionStorage.setItem('deezerApiKey', deezerApiKey);
			sessionStorage.setItem('spotifyApiKey', spotifyApiKey);
		} else {
			console.log('error apis');
			setError('error');
		}
	};

	const saveTokens = () => {
		if (spotifyToken) {
			console.log(spotifyToken)
			sessionStorage.setItem('spotifyToken', spotifyToken);
		} else {
			console.log('error apis');
			setError('error');
		}
	};

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
				navigate('/');
			});
	};

	return { saveApis, spotifyApiKey, setSpotifyApiKey, deezerApiKey, setDeezerApiKey, error, spotifyPlaylists, getSpotifyPlaylists, saveTokens, spotifyToken, setSpotifyToken, saveTokenSpotify };
}
