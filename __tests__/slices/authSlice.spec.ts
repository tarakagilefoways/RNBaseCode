import authReducer, {
  IAuthSlice,
  loaderChange,
} from '../../src/service/auth/slice';

describe('authSlice reducer', () => {
  it('should handle loaderChange', () => {
    const initialState: IAuthSlice = {
      isLoading: false,
      email: '',
      password: '',
      token: '',
    };

    const nextState = {
      isLoading: true,
      email: '',
      password: '',
      token: '',
    };

    const action = loaderChange(nextState.isLoading);

    const result = authReducer(initialState, action);

    expect(result).toEqual(nextState);
  });
});
