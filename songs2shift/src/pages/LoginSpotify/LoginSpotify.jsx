import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import './LoginSpotify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { CONSTANTS } from 'global/constants';
import logo from 'assets/logo.png';
import useApi from 'hooks/useApi';
import { useNavigate } from 'react-router';

const authEndpoint = CONSTANTS.Spotify.authEndpoint;
const clientId = CONSTANTS.Spotify.SPOTIFY_CLIENT_ID;
const redirectUri = CONSTANTS.Spotify.SPOTIFY_REDIRECT_URI;
const scopes = CONSTANTS.Spotify.scopes;

const Login = () => {
	const { spotifyToken } = useApi();
	const navigate = useNavigate();

	useEffect(() => {
		if (spotifyToken) {
			navigate(CONSTANTS.routes.home);
		}
	}, [navigate, spotifyToken]);

	const handleLogin = () => {
		window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token`;
	};
	return (
		<div className="flex flex-column justify-content-center align-items-center login-page">
			<img className="logo" src={logo} alt={CONSTANTS.title} />
			<Panel header="LOGIN CON SPOTIFY" style={{ width: '400px' }}>
				<p>Por favor, inicia sesión con tu cuenta de Spotify para poder utilizar nuestra aplicación.</p>
				<Button className="p-button-raised p-button-rounded" onClick={handleLogin}>
					<FontAwesomeIcon icon={faSpotify} className="fa-pull-left" size="2x" />
					<span className="spotify-login-text">Iniciar sesión con Spotify</span>
				</Button>
				<Divider />
				<p>
					¿No tienes una cuenta de Spotify? <a href="https://www.spotify.com/signup/">Regístrate aquí</a>.
				</p>
			</Panel>
		</div>
	);
};

export default Login;
