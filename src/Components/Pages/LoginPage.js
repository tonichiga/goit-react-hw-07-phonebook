import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      display: 'block',
      margin: '0 auto',
      width: '400px',

      '& .MuiInputBase-root': {
        width: 400,
        marginBottom: 40,
      },
    },
  },
  title: {
    marginBottom: 60,
  },
}));

const LoginPage = ({ onLoginUser }) => {
  const classes = useStyles();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const getLogin = e => {
    setLogin(e.target.value);
  };

  const getPassword = e => {
    setPassword(e.target.value);
  };

  const onUserLogin = e => {
    e.preventDefault();
    const user = {
      email: login,
      password,
    };

    onLoginUser(user);
  };

  return (
    <>
      <h1 className={classes.title}>Страница логина</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onUserLogin}
      >
        <TextField
          className={classes.link}
          id="outlined-basic"
          label="Login"
          variant="outlined"
          onChange={getLogin}
          name="name"
          // value={name}
        />
        <TextField
          className={classes.link}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={getPassword}
          name="password"
          // value={password}
        />
        <Button
          type="submit"
          // color="inherit"
          variant="contained"
          color="secondary"
          className={classes.btn}
        >
          Login
        </Button>
      </form>
    </>
  );
};

const mapDispatchToProps = { onLoginUser: authOperations.login };

export default connect(null, mapDispatchToProps)(LoginPage);
