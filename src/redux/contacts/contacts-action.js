import { createAction } from '@reduxjs/toolkit';

const getContacts = createAction('contacts');
const addContacts = createAction('addContact');
const deleteContacts = createAction('delete/Contacts');

const axiosAddContacts = createAction('contacts/AxiosAddContacts');
const addContactsSuccess = createAction('success/AddContacts');
const errorContacts = createAction('error/AddContacts');

const axiosDeleteContacts = createAction('contacts/AxiosDeleteContacts');
const deleteContactsSuccess = createAction('success/DeleteContacts');
const errorDeleteContacts = createAction('error/AddContacts');

const axiosGetContacts = createAction('contacts/AxiosGetContacts');
const getContactsSuccess = createAction('success/GetContacts');
const errorGetContacts = createAction('error/GetContacts');

const action = {
  addContacts,
  getContacts,
  deleteContacts,
  axiosAddContacts,
  addContactsSuccess,
  errorContacts,
  axiosDeleteContacts,
  deleteContactsSuccess,
  errorDeleteContacts,
  axiosGetContacts,
  getContactsSuccess,
  errorGetContacts,
};
export default action;
