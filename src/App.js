import React, { Suspense, lazy, useEffect } from 'react';
import UserMenu from './Components/UserMenu';
import LoginBar from './Components/LoginBar';
import { Switch, Route, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import authSelector from './redux/auth/auth-selector';
import authOperation from './redux/auth/auth-operation';
import PrivatRoute from './privat-route/PrivatRoute';
import PublicRoute from './public-route/PublicRoute';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  '& > * + *': {
    marginLeft: theme.spacing(2),
  },
  home: {
    backgroundColor: 'blue',
    marginRight: 20,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const HomePage = lazy(() => import('./Components/Pages/HomePage'));
const RegisterPage = lazy(() => import('./Components/Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Components/Pages/LoginPage'));
const ContactList = lazy(() => import('./Components/Pages/ContactList'));

const App = ({ isAuth, onGetUser }) => {
  const classes = useStyles();

  useEffect(() => {
    onGetUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <NavLink exact to="/" className={classes.link}>
            <Button
              className={classes.home}
              variant="contained"
              color="secondary"
            >
              Home
            </Button>
          </NavLink>
          {isAuth && (
            <NavLink exact to="/contacts" className={classes.link}>
              <Button
                className={classes.home}
                variant="contained"
                color="secondary"
              >
                Contacts
              </Button>
            </NavLink>
          )}

          {isAuth ? <UserMenu /> : <LoginBar />}
        </Toolbar>
      </AppBar>
      <Suspense
        fallback={
          <>
            <Loader
              className={classes.loader}
              type="Rings"
              color="red"
              height={100}
              width={100}
            />
          </>
        }
      >
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
