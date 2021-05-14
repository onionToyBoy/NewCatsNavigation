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
    maxHeight: 40,
    padding: 8,
    backgroundColor: colors.white,
  },
});
