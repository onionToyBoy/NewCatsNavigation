import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const SearchBar = ({ searchCat }) => {

  return (
    <TextInput
      style={styles.search}
      placeholder='Type Here...'
      editable
      maxLength={30}
      onChangeText={searchCat}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 8,
  },
});