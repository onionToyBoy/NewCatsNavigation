import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

export const InfoBlock = ({ info, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  title: {
    color: colors.grayGreen,
    fontSize: 15,
    marginBottom: 5,
  },
  info: {
    color: colors.black,
    fontSize: 15,
    marginBottom: 10,
  },
});
