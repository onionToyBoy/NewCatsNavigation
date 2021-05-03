import React from 'react';
import { FlatList, View } from 'react-native';

import { Cat } from './Cat';
import { colors } from '../constants/colors';

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.dustyRed,
      }}
    />
  );
};

export const CatsList = ({ cats, goToCat }) => (
  <FlatList
    data={cats}
    renderItem={({ item }) => <Cat cat={item} goToCat={goToCat} />}
    keyExtractor={item => item.id.toString()}
    ItemSeparatorComponent={renderSeparator}
  />
);
