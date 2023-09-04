module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    './setupJest.ts',
    '@testing-library/jest-native/extend-expect',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-navigation/.*)/',
  ],
};
