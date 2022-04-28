import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import actions from './phonebook-actions';
import {
  getContacts,
  postContacts,
  deleteContact,
} from './phonebook-operations';

const notify = notification =>
  toast.success(notification, {
    position: 'top-right',
    theme: 'colored',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const contacts = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [postContacts.fulfilled]: (state, { payload }) => {
    notify(`${payload.name} has been added to your contacts`);
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    console.log(payload);
    notify('Deleted');
    return [...state.filter(({ id }) => id !== payload)];
  },
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [postContacts.pending]: () => true,
  [postContacts.fulfilled]: () => false,
  [postContacts.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  isLoading,
  filter,
});