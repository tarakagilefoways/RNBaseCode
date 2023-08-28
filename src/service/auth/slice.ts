import { createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

export interface IAuthSlice {
  isLoading: boolean;
}

const initialState: IAuthSlice = {
  isLoading: false,
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
    builder.addCase(REHYDRATE, (state) => {
      console.log('in rehydrate', state);
    });
  },
});

export const { loaderChange } = authSlice.actions;
export default authSlice;
