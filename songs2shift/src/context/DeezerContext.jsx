import React, { useState } from "react";

const Context = React.createContext({});

export function DeezerContextProvider({ children }) {
  const [deezerApiKey, setDeezerApiKey] = useState(sessionStorage.getItem('deezerApiKey') || '');


  return (
    <Context.Provider value={{ deezerApiKey, setDeezerApiKey}}>
      {children}
    </Context.Provider>
  );
}

export default Context;