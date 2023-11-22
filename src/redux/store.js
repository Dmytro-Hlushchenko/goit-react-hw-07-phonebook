import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./phonebookSlice";
import storage from 'redux-persist/lib/storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  }

const persistedContactsReduser = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contact: persistedContactsReduser,
    filter: filterReducer,
  },

   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);