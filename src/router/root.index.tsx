// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SignInForm from '../screen/SignIn';
import Home from '../screen/home';

export type MainStackParamList = {
  SignInForm: {};
  Home: {};
};
const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInForm" component={SignInForm} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default AppStack;
