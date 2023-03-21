import { CONSTANTS } from 'global/constants';
import React, { useState } from 'react';

const Context = React.createContext({});

export function DeezerContextProvider({ children }) {
	const [deezerToken, setDeezerToken] = useState(sessionStorage.getItem(CONSTANTS.session.types.deezerToken) || '');
  const [deezerUserData, setDeezerUserData] = useState({});


	return <Context.Provider value={{ deezerToken, setDeezerToken, deezerUserData, setDeezerUserData }}>{children}</Context.Provider>;
}

export default Context;
