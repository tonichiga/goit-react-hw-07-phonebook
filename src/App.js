import React, { Suspense, lazy, useEffect } from 'react';
import UserMenu from './Components/UserMenu';
import LoginBar from './Components/LoginBar';
import { Switch, Route } from 'react-router-dom';
import authSelector from './redux/auth/auth-selector';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import authOperation from './redux/auth/auth-operation';
import PrivatRoute from './privat-route/PrivatRoute';
import PublicRoute from './public-route/PublicRoute';
import Spinner from './Components/Spinner';
import AppNavBar from './Components/AppNavBar';

const HomePage = lazy(() => import('./Components/Pages/HomePage'));
const RegisterPage = lazy(() => import('./Components/Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Components/Pages/LoginPage'));
const ContactList = lazy(() => import('./Components/Pages/ContactList'));

const App = ({ isAuth, onGetUser }) => {
  useEffect(() => {
    onGetUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <AppNavBar />
          {isAuth ? <UserMenu /> : <LoginBar />}
        </Toolbar>
      </AppBar>

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivatRoute path="/contacts" component={ContactList} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: authSelector.getAuth(state),
  };
};

const mapDispatchToProps = {
  onGetUser: authOperation.getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
