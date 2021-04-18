import axios from 'axios';
import actions from './contacts-action';

const addTodo = contact => dispatch => {
  dispatch(actions.axiosAddContacts());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.errorContacts(error.message)));
};

const deleteContacts = id => dispatch => {
  dispatch(actions.axiosDeleteContacts());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.errorDeleteContacts(error.message)));
};

// const getContacts = data => dispatch => {
//   dispatch(actions.axiosGetContacts());

//   axios
//     .get(`/contacts`)
//     .then(data => dispatch(actions.getContactsSuccess(data.data)))
//     .catch(error => dispatch(actions.errorGetContacts(error)));
// };

// Пример асинхронной функции
const getContacts = data => async dispatch => {
  dispatch(actions.axiosGetContacts(false));

  try {
    const res = await axios.get('/contacts');
    dispatch(actions.getContactsSuccess(res.data));
  } catch (error) {
    dispatch(actions.errorGetContacts(error.message));
  }
};

const operationFilterContacts = data => dispatch => {
  dispatch(actions.filterContacts(data));
};

const registerUser = data => dispatch => {
  dispatch(actions.registerUser(data));
};

const loginUser = data => dispatch => {
  dispatch(actions.loginUser(data));
};

// eslint-disable-next-line
export default {
  addTodo,
  deleteContacts,
  getContacts,
  operationFilterContacts,
  registerUser,
  loginUser,
};
