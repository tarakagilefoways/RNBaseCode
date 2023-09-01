import React from 'react';
import renderer from 'react-test-renderer';
import { RenderResult, act, fireEvent } from '@testing-library/react-native';

import { SignInTIDS } from '../../src/types/testIds';
// import App from '../../App';
import AppStack, { MainStackParamList } from '../../src/router/root.index';
import renderWithProviders from '../../src/utils/test-utils';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../../src/screen/home';
import SignInForm from '../../src/screen/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootReducerType } from '../../src/store/store.hooks';
const Stack = createNativeStackNavigator<MainStackParamList>();

describe('Sign In Form Snapshot', () => {
  test('Renders Correctly and Create Snapshot', () => {
    const tree = renderWithProviders(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignInForm" component={SignInForm} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Sign In Form Test Suit:', () => {
  let wrapper: RenderResult;

  let email = 'Test@Email.com';
  let password = 'Test@123';

  beforeEach(() => {
    wrapper = renderWithProviders(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignInForm" component={SignInForm} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
    );
  });

  it('Check Input Components Exists', () => {
    let emailInput = wrapper.getByTestId(SignInTIDS.Email);
    expect(emailInput).toBeTruthy();
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);
    expect(passwordInput).toBeTruthy();
  });

  it('Get Button  Components exist', () => {
    let signInBtn = wrapper.getByTestId(SignInTIDS.SignIn);
    expect(signInBtn).toBeTruthy();
  });

  it('Update Input Components Text and Check Later', async () => {
    let emailInput = wrapper.getByTestId(SignInTIDS.Email);
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);

    await act(() => {
      fireEvent.changeText(emailInput, email);
      fireEvent.changeText(passwordInput, password);
    });

    let updatedEmailInput = wrapper.getByDisplayValue(email);
    expect(updatedEmailInput).toBeTruthy();
    let updatedPasswordInput = wrapper.getByDisplayValue(password);
    expect(updatedPasswordInput).toBeTruthy();
  });

  it('Presse Sign In and Check Screen with Login Test', async () => {
    let emailInput = wrapper.getByTestId(SignInTIDS.Email);
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);
    let signInBtn = wrapper.getByTestId(SignInTIDS.SignIn);

    await act(() => {
      fireEvent.changeText(emailInput, email);
      fireEvent.changeText(passwordInput, password);
      fireEvent.press(signInBtn);
    });

    let textHomeScreen = wrapper.getByText('Home Screen');
    expect(textHomeScreen).toBeTruthy();
  });
});

describe('Sign In Form Prefilled Test Suit:', () => {
  let wrapper: RenderResult;

  let email = 'TestPrefill@Email.com';
  let password = 'TestPrefill@123';
  const initialState: RootReducerType = {
    auth: { email: email, password: password, isLoading: false },
  };
  beforeEach(() => {
    wrapper = renderWithProviders(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignInForm" component={SignInForm} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
      { preloadedState: initialState },
    );
  });

  it('Presse Sign In and Check Screen with Login Test', async () => {
    let signInBtn = wrapper.getByTestId(SignInTIDS.SignIn);
    await act(() => {
      fireEvent.press(signInBtn);
    });

    let textHomeScreen = wrapper.getByText('Home Screen');
    expect(textHomeScreen).toBeTruthy();
  });
});
