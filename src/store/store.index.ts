import { configureStore } from '@reduxjs/toolkit';
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
import CreateSensitiveStorage from '../utils/sensitiveInfo';
import RootReducer from './reducer';

const storage = CreateSensitiveStorage({
  keychainService: 'rrr',
  sharedPreferencesName: 'rrr',
});
const config = {
  key: 'root',
  storage,
};
const reducer = persistReducer(config, RootReducer);

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
