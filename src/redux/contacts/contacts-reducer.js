import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import newActions from './contacts-action';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contacts = createReducer([], {
  [newActions.addContactsSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [newActions.deleteContactsSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [newActions.getContactsSuccess]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [newActions.axiosAddContacts]: () => true,
  [newActions.addContactsSuccess]: () => false,
  [newActions.errorContacts]: () => false,

  [newActions.axiosDeleteContacts]: () => true,
  [newActions.deleteContactsSuccess]: () => false,
  [newActions.errorGetContacts]: () => false,

  [newActions.axiosGetContacts]: () => true,
  [newActions.getContactsSuccess]: () => false,
  [newActions.errorGetContacts]: () => false,
});

const filter = createReducer('', {
  [newActions.filterContacts]: (_, { payload }) => payload,
});

const createUser = createReducer(
  {},
  {
    [newActions.createUser]: (_, { payload }) => payload,
  },
);

const contactReducers = combineReducers({
  contacts,
  loading,
  filter,
  createUser,
});

export default contactReducers;
