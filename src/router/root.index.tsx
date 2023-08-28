// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInForm from '../screen/SignIn';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SignInForm} />
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
