import React from 'react';
import HomePage from './Components/Pages/HomePage';
import RegisterPage from './Components/Pages/RegisterPage';
import LoginPage from './Components/Pages/LoginPage';
import { Switch, Route, NavLink } from 'react-router-dom';
import UserMenu from './Components/UserMenu';
import LoginBar from './Components/LoginBar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import ContactList from './Components/Pages/ContactList';
import authSelector from './redux/auth/auth-selector';
import authOperation from './redux/auth/auth-operation';
import { useEffect } from 'react';

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
}));

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
          <NavLink exact to="/contacts" className={classes.link}>
            <Button
              className={classes.home}
              variant="contained"
              color="secondary"
            >
              Contacts
            </Button>
          </NavLink>

          {isAuth ? <UserMenu /> : <LoginBar />}
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contacts" component={ContactList} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
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
