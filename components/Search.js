import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Search = ({ searchCat }) => {
  const searchingCat = text => searchCat(text);
  return (
    <TextInput
      style={styles.search}
      placeholder='Type Here...'
      editable
      maxLength={30}
      onChangeText={searchingCat}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 8,
  },
});
