import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export const InfoBlock = ({cat}) => {
let{bread,age,info}=cat;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Порода:</Text>
      <Text style={styles.info}>{bread}</Text>
      <Text style={styles.title}>Возраст:</Text>
      <Text style={styles.info}>{age}</Text>
      <Text style={styles.title}>Описание:</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkBlue,
    borderTopWidth: 1,
    borderTopColor: colors.darkBlue,
    padding: 15,
    width: '90%',
  },
  title: {
    color: colors.grayGreen,
    fontSize: 15,
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  info: {
    color: 'black',
    fontSize: 15,
    marginBottom: 15,
  },
});
