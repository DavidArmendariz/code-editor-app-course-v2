import { Switch, Route } from 'react-router';
import paths from './paths';

const Test = () => <div>Hello world!</div>;

const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.home} component={Test} />
    </Switch>
  );
};

export default Routes;
