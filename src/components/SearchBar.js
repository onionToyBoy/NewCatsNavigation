import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { colors } from '../constants/colors';

export const SearchBar = ({ onSearch }) => {
  return (
    <TextInput
      style={styles.search}
      placeholder='Type Here...'
      editable
      maxLength={30}
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    paddingLeft: 8,
    backgroundColor: colors.white,
  },
});
