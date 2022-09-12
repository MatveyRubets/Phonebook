import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from './contactsOperations';
import { filter } from 'redux/contacts/contactsActions';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [removeContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
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
  [fetchContacts.rejected]: () => [],
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
