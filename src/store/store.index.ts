import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createSensitiveStorage from "redux-persist-sensitive-storage";

import AuthReducer from "../service/auth/slice";

const rootReducer = combineReducers({
  auth: AuthReducer.reducer,
});
const storage = createSensitiveStorage({
  keychainService: "rrr",
  sharedPreferencesName: "rrr",
});
const config = {
  key: "root",
  storage,
};
const reducer = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
