import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import CreateSensitiveStorage from '../util/sensitiveInfo';

import AuthReducer from '../service/auth/slice';

const rootReducer = combineReducers({
  auth: AuthReducer.reducer,
});
const storage = CreateSensitiveStorage({
  keychainService: 'rrr',
  sharedPreferencesName: 'rrr',
});
const config = {
  key: 'root',
  storage,
};
const reducer = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
