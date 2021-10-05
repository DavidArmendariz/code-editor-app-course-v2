import { ComponentType } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
