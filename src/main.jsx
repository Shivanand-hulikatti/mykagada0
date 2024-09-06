import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={process.env.domain || ''}
      clientId={process.env.clientId || ''}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={(appState) => {
        console.log('Auth0 redirect callback', appState);
      }}
      onError={(error) => {
        console.error('Auth0 error', error);
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
