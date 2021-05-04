import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { Cat } from './Cat';
import { colors } from '../constants/colors';

const renderSeparator = () => (<View style={styles.separator}/>);

export const CatsList = ({ cats, onPressItem }) => {
  const renderItem = ({ item }) => <Cat cat={item} onPressItem={onPressItem} />;

  return (
    <FlatList
      data={cats}
      renderItem={renderItem}
      keyExtractor={cat => cat.id.toString()}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.dustyRed,
  },})
