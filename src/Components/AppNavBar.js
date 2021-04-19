import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import authSelector from '../redux/auth/auth-selector';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  home: {
    backgroundColor: 'blue',
    marginRight: 20,
  },
}));

const AppNavBar = ({ isAuth }) => {
  const classes = useStyles();

  return (
    <>
      <NavLink exact to="/">
        <Button className={classes.home} variant="contained" color="secondary">
          Home
        </Button>
      </NavLink>
      {isAuth && (
        <NavLink exact to="/contacts">
          <Button
            className={classes.home}
            variant="contained"
            color="secondary"
          >
            Contacts
          </Button>
        </NavLink>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: authSelector.getAuth(state),
  };
};

export default connect(mapStateToProps)(AppNavBar);
