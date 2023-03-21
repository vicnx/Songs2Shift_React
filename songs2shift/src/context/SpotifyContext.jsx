import { CONSTANTS } from "global/constants";
import React, { useState } from "react";

const Context = React.createContext({});

export function SpotifyContextProvider({ children }) {
  const [spotifyToken, setSpotifyToken] = useState(sessionStorage.getItem(CONSTANTS.session.types.spotifyToken) || '');
  const [spotifyPlaylists, setSpotifyPlaylists] = useState([]);
  const [spotifyUserData, setSpotifyUserData] = useState({});


  return (
    <Context.Provider value={{ spotifyPlaylists, setSpotifyPlaylists, spotifyToken, setSpotifyToken, spotifyUserData, setSpotifyUserData }}>
      {children}
    </Context.Provider>
  );
}

export default Context;

