import authSelectors from '../redux/auth/auth-selector';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivatRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getAuth(state),
});

export default connect(mapStateToProps)(PrivatRoute);
