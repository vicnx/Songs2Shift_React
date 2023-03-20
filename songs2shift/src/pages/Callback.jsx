import useApi from 'hooks/useApi';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Callback = () => {
  const navigate = useNavigate();
	const { saveTokenSpotify, saveTokens } = useApi();
	useEffect(() => {
		const token = window.location.hash
			.substring(1)
			.split('&')
			.reduce((initial, item) => {
				if (item) {
					const parts = item.split('=');
					initial[parts[0]] = decodeURIComponent(parts[1]);
				}
				return initial;
			}, {});
		console.log(token);
		saveTokenSpotify(token?.access_token)
    saveTokens();
		localStorage.setItem('spotifyToken', JSON.stringify(token));
		window.close();
    navigate('/');
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>Procesando inicio de sesión con Spotify...</h1>
		</div>
	);
};

export default Callback;
