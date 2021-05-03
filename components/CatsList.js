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

export const CatsList = ({ cats, goToCat }) => {
  const renderItem = ({ item }) => <Cat cat={item} goToCat={goToCat} />;
  return (
    <FlatList
      data={cats}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};
