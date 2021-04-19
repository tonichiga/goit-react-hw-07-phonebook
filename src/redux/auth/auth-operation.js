import axios from 'axios';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  //   console.log(credentials);
  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  console.log(credentials);
  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getUser = () => async (dispatch, getState) => {
  const persistToken = getState();

  if (!persistToken.auth.token) {
    return;
  }

  token.set(persistToken.auth.token);

  dispatch(authActions.getUserRequest());

  try {
    const response = await axios.get('/users/current');

    console.log(response.data);

    dispatch(authActions.getUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getUserError(error.message));
  }
};

//eslint-disable-next-line
export default {
  register,
  login,
  logout,
  getUser,
};
