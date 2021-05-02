import React from 'react';
import { FlatList, View } from 'react-native';

import { Cat } from './Cat';

//Создаём разделитель между генерируемыми объектами:

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#7E3032FF',
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
