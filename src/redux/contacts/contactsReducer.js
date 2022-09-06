import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from './contactsOperations';
import { filter } from 'redux/contacts/contactsActions';
import { Notify } from 'notiflix';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => {
    console.log('AddContacts reducer:', state, payload);

    return [...state, payload];
  },
  [removeContacts.fulfilled]: (state, { payload }) => {
    console.log('RemoveContacts reducer:', state, payload);
    Notify.warning('Contact deleted. Refresh the page to see the changes');

    return state.filter(({ id }) => id !== payload);
  },
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [removeContacts.pending]: () => true,
  [removeContacts.fulfilled]: () => false,
  [removeContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (_, { payload }) => payload,
  [addContacts.pending]: () => null,
  [removeContacts.rejected]: (_, { payload }) => payload,
  [removeContacts.pending]: () => null,
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload.toLowerCase(),
});

export { entities, isLoading, error, filterReducer };
