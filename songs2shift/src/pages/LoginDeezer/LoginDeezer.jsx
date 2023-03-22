import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import './LoginDeezer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { CONSTANTS } from 'global/constants';
import logo from 'assets/logo.png';
import useApi from 'hooks/useApi';
import { useNavigate } from 'react-router';

const clientId = CONSTANTS.Deezer.DEEZER_CLIENT_ID;
const redirectUri = CONSTANTS.Deezer.DEEZER_REDIRECT_URI;

const LoginDeezer = () => {
	const { deezerToken } = useApi();
	const navigate = useNavigate();

	useEffect(() => {
		if (deezerToken) {
			navigate(CONSTANTS.routes.home);
		}
	}, [navigate, deezerToken]);

	const handleLogin = () => {
		window.location = `https://connect.deezer.com/oauth/auth.php?app_id=${clientId}&redirect_uri=${redirectUri}&perms=basic_access,email&response_type=token#!`;
	};
	return (
		<div className="flex flex-column justify-content-center align-items-center login-page">
			<img className="logo" src={logo} alt={CONSTANTS.title} />
			<Panel header="LOGIN CON DEEZER" style={{ width: '400px' }}>
				<p>Por favor, inicia sesión con tu cuenta de Spotify para poder utilizar nuestra aplicación.</p>
				<Button className="p-button-raised p-button-rounded" onClick={handleLogin}>
					<FontAwesomeIcon icon={faSpotify} className="fa-pull-left" size="2x" />
					<span className="spotify-login-text">Iniciar sesión con Deezer</span>
				</Button>
				<Divider />
				<p>
					¿No tienes una cuenta de Spotify? <a href="https://www.spotify.com/signup/">Regístrate aquí</a>.
				</p>
			</Panel>
		</div>
	);
};

export default LoginDeezer;
