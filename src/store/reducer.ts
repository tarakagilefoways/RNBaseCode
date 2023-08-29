import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from '../service/auth/slice';

const rootReducer = combineReducers({
  auth: AuthReducer.reducer,
});
export default rootReducer;
