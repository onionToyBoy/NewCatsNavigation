import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Коты' >
        <Stack.Screen
          name='Коты'
          component={MainScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#E1DEDCFF',
            },
          }}
        />
        <Stack.Screen
          name='Cat'
          component={DetailScreen}
          options={{
            title:'Кот',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#E1DEDCFF',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
