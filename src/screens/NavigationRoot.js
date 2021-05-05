import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {CatsMain} from './CatsMain';
import {CatDetails} from './CatDetails';
import { colors } from '../constants/colors';
import { routes } from '../constants/routes';

const Stack = createStackNavigator();

function NavigationRoot() {
  const createCatsTitle = ({ route }) => ({
    title: route.params.cat.name,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.brightGray,
      height: 40,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.Cats}>
        <Stack.Screen
          name={routes.CatsMain}
          component={CatsMain}
          options={{
            title: 'Коты',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.brightGray,
              height: 40,
            },
          }}
        />
        <Stack.Screen name={routes.CatDetails} component={CatDetails} options={createCatsTitle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRoot;
