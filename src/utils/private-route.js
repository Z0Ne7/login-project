import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './check-authentication';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};
