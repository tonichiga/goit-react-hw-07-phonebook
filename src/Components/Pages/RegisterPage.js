import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';

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

const RegisterPage = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const setNameUser = e => {
    setName(e.target.value);
  };

  const setPasswordUser = e => {
    setPassword(e.target.value);
  };

  const setEmailUser = e => {
    setEmail(e.target.value);
  };

  const onSubminNewUser = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    onRegister(data);
  };

  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>Страница регистрации пользователя</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubminNewUser}
      >
        <TextField
          className={classes.link}
          id="outlined-basic"
          label="Login"
          variant="outlined"
          onChange={setNameUser}
          name="name"
          value={name}
        />
        <TextField
          className={classes.link}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={setEmailUser}
          name="email"
          value={email}
        />
        <TextField
          className={classes.link}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={setPasswordUser}
          name="password"
          value={password}
        />

        <Button
          type="submit"
          // color="inherit"
          variant="contained"
          color="secondary"
          className={classes.btn}
        >
          Create user
        </Button>
      </form>
    </>
  );
};

const mapDispathToProps = { onRegister: authOperations.register };

export default connect(null, mapDispathToProps)(RegisterPage);
