import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import { AxiosRequestConfig } from 'axios';

import Network from '../../constants/network';

import AxiosInstance from '../../network/axios/axiosInterceptor';

export const LoginApiAction = createAsyncThunk(
  'signin',
  async (params: ILogiInReq, thunkAPI) => {
    const configs: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await AxiosInstance.post(
        Network.routes.auth + Network.endpoints.login,
        params,
        configs,
      );
      if (response.status === 200) {
        return thunkAPI.fulfillWithValue(response?.data);
      } else {
        return thunkAPI.rejectWithValue(response.statusText);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Login Failed');
    }
  },
);
export interface IAuthSlice {
  isLoading: boolean;
  email: string;
  password: string;
  token: string;
}

const initialState: IAuthSlice = {
  isLoading: false,
  email: '',
  password: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loaderChange: (state: IAuthSlice, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, () => {});
    builder.addCase(LoginApiAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginApiAction.fulfilled, (state, _action) => {
      state.isLoading = false;
    });
    builder.addCase(LoginApiAction.rejected, (state, _action) => {
      state.isLoading = false;
    });
  },
});
export const selecToken = (state: IAuthSlice) => state.token;
export const loaderChange = authSlice.actions.loaderChange;
export default authSlice.reducer;
