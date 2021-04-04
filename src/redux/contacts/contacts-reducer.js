import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contacts-action';
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

export default combineReducers({
  contacts,
});

// axiosDeleteContacts,
// deleteContactsSuccess,
// errorDeleteContacts,
