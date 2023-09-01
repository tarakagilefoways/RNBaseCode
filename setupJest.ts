jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock('redux-persist-sensitive-storage', () => {
  const createSensitiveStorage = ({ children }: any) => children;
  return createSensitiveStorage;
});

jest.mock('react-native-sensitive-info', () => {
  const sensitiveInfo = ({ children }: any) => children;
  return sensitiveInfo;
});
