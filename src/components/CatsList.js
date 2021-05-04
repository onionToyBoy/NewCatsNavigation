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

export const CatsList = ({ cats, onPressItem }) => {
  const renderItem = ({ item }) => <Cat cat={item} onPressItem={onPressItem} />;

  return (
    <FlatList
      data={cats}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};
