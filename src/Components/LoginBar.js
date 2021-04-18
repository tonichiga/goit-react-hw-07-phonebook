import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
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
}));

const LoginBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink exact to="/register" className={classes.link}>
        <Button
          // color="inherit"
          variant="contained"
          color="secondary"
          className={classes.btn}
        >
          Регистрация
        </Button>
      </NavLink>

      <NavLink exact to="/login" className={classes.link}>
        <Button
          // color="inherit"
          variant="contained"
          color="secondary"
          className={classes.btn}
        >
          Логин
        </Button>
      </NavLink>
    </div>
  );
};

export default LoginBar;
