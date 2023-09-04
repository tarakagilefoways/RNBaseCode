/* The code is a test suite for a Sign In form in a TypeScript React application. It uses the
`@testing-library/react-native` library for testing React Native components. */
import React from 'react';
import {
  RenderResult,
  act,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';

import { MainStackParamList } from '../../src/router/root.index';
import { NavigationContainer } from '@react-navigation/native';
import MockAdapter from 'axios-mock-adapter';

import Home from '../../src/screen/home';
import SignInForm from '../../src/screen/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInTIDS } from '../../src/constants/testIds';
import ScreenNames from '../../src/constants/screenNames';
import Network from '../../src/constants/network';
import { Provider } from 'react-redux';
import setupStore from '../../src/store/store.index';
import AxiosInstance from '../../src/network/axios/axiosInterceptor';

const Stack = createNativeStackNavigator<MainStackParamList>();

/* The code is a test case that checks if the Sign In form renders correctly and creates a snapshot of
the rendered component. It uses the `render` function from the `@testing-library/react-native`
library to render the component tree, and the `toJSON` method to convert the rendered component tree
to a JSON representation. The `toMatchSnapshot` function from the Jest testing framework is then
used to compare the JSON representation of the rendered component tree with a previously stored
snapshot. If the two match, the test case passes. This helps ensure that the Sign In form renders
consistently and does not have any unexpected changes. */
describe('Sign In Form Snapshot', () => {
  test('Renders Correctly and Create Snapshot', () => {
    const tree = render(
      <Provider store={setupStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ScreenNames.SignInForm}
              component={SignInForm}
            />
            <Stack.Screen name={ScreenNames.Home} component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Sign In Form Test Suit:', () => {
  /* The code is setting up a mock adapter (`mock`) and a wrapper (`wrapper`) for testing the Sign In
 form component. */
  let mock: MockAdapter;
  let wrapper: RenderResult;
  let username = 'atuny0';
  let password = '123456';
  beforeEach(() => {
    wrapper = render(
      <Provider store={setupStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ScreenNames.SignInForm}
              component={SignInForm}
            />
            <Stack.Screen name={ScreenNames.Home} component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );
    mock = new MockAdapter(AxiosInstance);
    /* The `mock.onPost` function is used to mock a POST request to a specific URL. In this case, it is
   mocking a POST request to the `${Network.routes.auth}${Network.endpoints.login}` URL. */
    mock
      .onPost(`${Network.routes.auth}${Network.endpoints.login}`)
      .reply((config) => {
        const data = JSON.parse(config.data);
        if (data.username === username && data.password === password) {
          return [
            200,
            {
              data: {
                id: 1,
                username: 'atuny0',
                email: 'atuny0@sohu.com',
                firstName: 'Terry',
                lastName: 'Medhurst',
                gender: 'male',
                image: 'https://robohash.org/hicveldicta.png',
                token:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY5MzgyNDY1NiwiZXhwIjoxNjkzODI4MjU2fQ.BYA30pEC0vG6eBSPeFdoG-bkLiaYmLe9vq7Y1MeWu38',
              },
              status: 200,
            },
          ];
        } else {
          return [401, { error: 'Unauthorized' }];
        }
      });
  });

  /* The code is a test case that checks if the input components for the username and password exist in
  the Sign In form. */
  it('Check Input Components Exists', () => {
    let usernameInput = wrapper.getByTestId(SignInTIDS.Username);
    expect(usernameInput).toBeTruthy();
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);
    expect(passwordInput).toBeTruthy();
  });

  /* The code is a test case that checks if the button component for signing in exists in the Sign In
 form. */
  it('Get Button  Components exist', () => {
    let signInBtn = wrapper.getByTestId(SignInTIDS.SignIn);
    expect(signInBtn).toBeTruthy();
  });

  /* The code is a test case that updates the text of the input components for the username and password
 in the Sign In form and then checks if the updated values are displayed correctly. */
  it('Update Input Components Text and Check Later', async () => {
    let usernameInput = wrapper.getByTestId(SignInTIDS.Username);
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);

    await act(() => {
      fireEvent.changeText(usernameInput, username);
      fireEvent.changeText(passwordInput, password);
    });

    let updatedUsernameInput = wrapper.getByDisplayValue(username);
    expect(updatedUsernameInput).toBeTruthy();
    let updatedPasswordInput = wrapper.getByDisplayValue(password);
    expect(updatedPasswordInput).toBeTruthy();
  });

  /* The code is a test case that simulates a user entering a correct username and password in the Sign
 In form and pressing the Sign In button. It uses the `fireEvent.changeText` function to update the
 values of the username and password input components with the correct values. Then, it uses the
 `fireEvent.press` function to simulate a button press on the Sign In button. */
  it('Correct Username & Presse Sign In and Check Screen with Login  Success', async () => {
    let usernameInput = wrapper.getByTestId(SignInTIDS.Username);
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);
    let signInBtn = wrapper.getByTestId(SignInTIDS.SignIn);
    await act(() => {
      fireEvent.changeText(usernameInput, username);
      fireEvent.changeText(passwordInput, password);
      fireEvent.press(signInBtn);
    });

    await waitFor(
      () => {
        expect(wrapper.getByText('Home Screen')).toBeDefined(); // Assert error message
      },
      { timeout: 10000 },
    );
  }, 20000);
  /* The code is a test case that simulates a user entering a wrong username and correct password in
  the Sign In form and pressing the Sign In button. */
  it('Wrong Usernmae & Presse Sign In and Check Screen with Login Failure', async () => {
    let usernameInput = wrapper.getByTestId(SignInTIDS.Username);
    let passwordInput = wrapper.getByTestId(SignInTIDS.Password);
    let signInBtn = wrapper.getByTestId(SignInTIDS.SignIn);

    await act(() => {
      fireEvent.changeText(usernameInput, 'wronguser');
      fireEvent.changeText(passwordInput, password);
      fireEvent.press(signInBtn);
    });

    await waitFor(
      () => {
        expect(wrapper.getByTestId(SignInTIDS.NetworkError)).toBeDefined(); // Assert error message
      },
      { timeout: 10000 },
    );
  }, 20000);
});
