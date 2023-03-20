import React from 'react';
import { REACT_CLIENT_ID, REACT_REDIRECT_URI } from 'apis/apis';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = REACT_CLIENT_ID;
const redirectUri = REACT_REDIRECT_URI;
const scopes = ['user-read-private'];

const Login = () => {
  const handleLogin = () => {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
  };

  return (
    <div>
      <h1>Inicio de sesión con Spotify</h1>
      <button onClick={handleLogin}>Iniciar sesión con Spotify</button>
    </div>
  );
};

export default Login;