// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, Booking, Keranjang, Account, Success } from '../../pages'

const Stack = createStackNavigator();

function Router() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Booking" component={Booking} options={{headerShown: false}}/>
        <Stack.Screen name="Keranjang" component={Keranjang} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown: false}}/>
        <Stack.Screen name="Success" component={Success} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default Router;