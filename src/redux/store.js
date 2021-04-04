import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: contactsReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
