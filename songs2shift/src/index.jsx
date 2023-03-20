import '@fortawesome/fontawesome-free/css/all.css';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-teal/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SpotifyContextProvider, } from "./context/SpotifyContext";
import { DeezerContextProvider } from "./context/DeezerContext";
import { ToastProvider } from "context/ToastContext";
ReactDOM.render(
  <React.StrictMode>
     <ToastProvider>
      <SpotifyContextProvider>
        <DeezerContextProvider>
          <App />
        </DeezerContextProvider>
      </SpotifyContextProvider>
     </ToastProvider>

  </React.StrictMode>,
  document.getElementById("root")
);