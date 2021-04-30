import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const InfoBlock = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Порода:</Text>
      <Text style={styles.info}>{props.cat.bread}</Text>
      <Text style={styles.title}>Возраст:</Text>
      <Text style={styles.info}>{props.cat.age}</Text>
      <Text style={styles.title}>Описание:</Text>
      <Text style={styles.info}>{props.cat.info}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2A3FFF',
    borderTopWidth: 1,
    borderTopColor: '#2D2A3FFF',
    padding: 15,
    width: '90%',
  },
  title: {
    color: '#77857AFF',
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
