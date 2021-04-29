import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={FirstScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7C42DCD0',
            },
          }}
        />
        <Stack.Screen
          name='Info'
          component={SecondScreen}
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
