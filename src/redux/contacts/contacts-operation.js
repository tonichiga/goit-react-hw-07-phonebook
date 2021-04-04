import axios from 'axios';
import actions from './contacts-action';
axios.defaults.baseURL = 'http://localhost:3000';

const addTodo = contact => dispatch => {
  dispatch(actions.axiosAddContacts());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.errorContacts(error)));
};

const deleteContacts = id => dispatch => {
  dispatch(actions.axiosDeleteContacts());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.errorDeleteContacts(error)));
};

const getContacts = data => dispatch => {
  dispatch(actions.axiosGetContacts());

  axios
    .get(`/contacts`)
    .then(data => dispatch(actions.getContactsSuccess(data.data)))
    .catch(error => dispatch(actions.errorGetContacts(error)));
};
// const getContacts = contact => dispatch => {
//   axios.get('/contacts', contact).then(({data}) => dispatch({"success/getContacts", payload: data}));

//   dispatch('contacts/GetContacts');
// };
export default { addTodo, deleteContacts, getContacts };

// actions.getContactsSuccess(data))
