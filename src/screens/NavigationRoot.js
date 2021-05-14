import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CatsMain } from './CatsMain';
import { CatDetails } from './CatDetails';
import { colors } from '../constants/colors';
import { routes } from '../constants/routes';

const Stack = createStackNavigator();

const commonHeaderOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.brightGray,
  },
};

const NavigationRoot = () => {
  const createCatsTitle = ({ route }) => ({
    title: route.params.cat.name,
    ...commonHeaderOptions,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.Cats}>
        <Stack.Screen
          name={routes.CatsMain}
          component={CatsMain}
          options={{
            title: 'Коты',
            ...commonHeaderOptions,
          }}
        />
        <Stack.Screen name={routes.CatDetails} component={CatDetails} options={createCatsTitle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
