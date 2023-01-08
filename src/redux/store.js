import { configureStore } from "@reduxjs/toolkit";
import phoneBookSliceReducer from './contact_slice.js';
import filterSliceReducer from './filter_slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, phoneBookSliceReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSliceReducer,
  },
})

export const persistor = persistStore(store);