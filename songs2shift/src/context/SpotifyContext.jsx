import React, { useState } from "react";

const Context = React.createContext({});

export function SpotifyContextProvider({ children }) {
  const [spotifyToken, setSpotifyToken] = useState(sessionStorage.getItem('spotifyToken') || '');
  const [spotifyPlaylists, setSpotifyPlaylists] = useState([]);


  return (
    <Context.Provider value={{ spotifyPlaylists, setSpotifyPlaylists, spotifyToken, setSpotifyToken }}>
      {children}
    </Context.Provider>
  );
}

export default Context;

