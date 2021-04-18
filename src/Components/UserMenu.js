import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import authSelector from '../redux/auth/auth-selector';
import authOperation from '../redux/auth/auth-operation';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  '& > * + *': {
    marginLeft: theme.spacing(2),
  },
  btn: {
    backgroundColor: 'green',
  },

  link: {
    textDecoration: 'none',
    marginRight: 20,
  },
  title: {
    marginRight: 20,
    fontSize: 18,
  },
}));

const UserMenu = ({ userName, logoutUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.title}>Hi, {userName}!</span>

      <Button
        type="button"
        onClick={logoutUser}
        variant="contained"
        color="secondary"
        className={classes.btn}
      >
        Выйти
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userName: authSelector.getUserName(state),
  };
};

const mapDispatchToProps = { logoutUser: authOperation.logout };
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
