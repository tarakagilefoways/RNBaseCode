import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AppStack from '../../router/root.index';

// Mock your Redux store
const mockStore = configureStore([]);

// Add similar testing for your App component's structure
describe('App', () => {
  it('renders the app structure correctly', () => {
    const initialState = {}; // Set your initial Redux store state here
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <AppStack />
      </Provider>,
    );
    const email = getByTestId('SignInEmail');
    fireEvent.changeText(email, 'test@example.com');
    // Add assertions here to check if your app's structure renders correctly
    // For example, you can check if specific components are rendered or if navigation works as expected.
    // ...
  });
});
