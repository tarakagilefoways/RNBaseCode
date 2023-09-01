import {
  IAuthSlice,
  authReducer,
  loaderChange,
} from '../../src/service/auth/slice';

describe('authSlice reducer', () => {
  it('should handle loaderChange', () => {
    const initialState: IAuthSlice = {
      isLoading: false,
    };

    const nextState = {
      isLoading: true,
    };

    const action = loaderChange(nextState.isLoading);

    const result = authReducer(initialState, action);

    expect(result).toEqual(nextState);
  });
});
