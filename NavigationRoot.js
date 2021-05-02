import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

function NavigationRoot() {
  const createCatsTitle = ({ route }) => ({
    title: route.params.cat.name,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#E1DEDCFF',
      height: 40,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Коты'>
        <Stack.Screen
          name='Коты'
          component={MainScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#E1DEDCFF',
              height: 40,
            },
          }}
        />
        <Stack.Screen name='Cat' component={DetailScreen} options={createCatsTitle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRoot;
