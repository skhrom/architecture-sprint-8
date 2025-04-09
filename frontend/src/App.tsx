import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak, { KeycloakConfig, KeycloakInitOptions  } from 'keycloak-js';
import ReportPage from './components/ReportPage';

/*const keycloakConfig: KeycloakConfig = {
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM||"",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID||"",
    pkceMethod: 'S256,
    flow: 'standard' // Явно указываем стандартный flow (authorization code)
};*/

const keycloakConfig: KeycloakConfig = {
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM || "",
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || ""
};

// Правильные параметры инициализации для PKCE
const initOptions: KeycloakInitOptions = {
    pkceMethod: 'S256', // Включаем PKCE с SHA-256
    flow: 'standard',   // Authorization Code Flow
    responseMode: 'query',
    onLoad: 'check-sso'
};

const keycloak = new Keycloak(keycloakConfig);

const App: React.FC = () => {
  return (
    <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
    >
      <div className="App">
        <ReportPage />
      </div>
    </ReactKeycloakProvider>
  );
};

export default App;