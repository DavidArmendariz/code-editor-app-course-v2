import { PropsWithChildren } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router';
import config from 'config';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={config.auth0Domain}
      clientId={config.auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
