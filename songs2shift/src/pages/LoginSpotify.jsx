import React from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import './LoginSpotify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { CONSTANTS } from 'global/constants';

const authEndpoint = CONSTANTS.Spotify.authEndpoint;
const clientId = CONSTANTS.Spotify.REACT_CLIENT_ID;
const redirectUri = CONSTANTS.Spotify.REACT_REDIRECT_URI;
const scopes = CONSTANTS.Spotify.scopes;

const Login = () => {
  const handleLogin = () => {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token`;
  };
  return (
    <div className="flex justify-content-center align-items-center login-page">
      <Panel header="LOGIN CON SPOTIFY" style={{ width: '400px' }}>
        <p>Por favor, inicia sesión con tu cuenta de Spotify para poder utilizar nuestra aplicación.</p>
        <Button className="p-button-raised p-button-rounded" onClick={handleLogin}>
          <FontAwesomeIcon icon={faSpotify} className="fa-pull-left" size="2x" />
          <span className="spotify-login-text">Iniciar sesión con Spotify</span>
        </Button>
        <Divider />
        <p>¿No tienes una cuenta de Spotify? <a href="https://www.spotify.com/signup/">Regístrate aquí</a>.</p>
      </Panel>
    </div>
  );
};

export default Login;