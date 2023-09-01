import { createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

export interface IAuthSlice {
  isLoading: boolean;
  email: string;
  password: string;
}

const initialState: IAuthSlice = {
  isLoading: false,
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loaderChange: (state: IAuthSlice, payload) => {
      state.isLoading = payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, () => {});
  },
});

export const { loaderChange } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
