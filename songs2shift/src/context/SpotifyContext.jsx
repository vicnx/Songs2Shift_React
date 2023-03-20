import React, { useState } from "react";

const Context = React.createContext({});

export function SpotifyContextProvider({ children }) {
  const [spotifyApiKey, setSpotifyApiKey] = useState(sessionStorage.getItem('spotifyApiKey') || '');
  const [spotifyToken, setSpotifyToken] = useState(sessionStorage.getItem('spotifyToken') || '');
  const [spotifyPlaylists, setSpotifyPlaylists] = useState([]);


  return (
    <Context.Provider value={{ spotifyApiKey, setSpotifyApiKey, spotifyPlaylists, setSpotifyPlaylists, spotifyToken, setSpotifyToken }}>
      {children}
    </Context.Provider>
  );
}

export default Context;

