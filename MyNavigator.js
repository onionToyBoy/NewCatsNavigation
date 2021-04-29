import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={MainScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7C42DCD0',
            },
          }}
        />
        <Stack.Screen
          name='Info'
          component={DetailScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7C42DCD0',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
