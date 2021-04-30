import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FirstScreen = ({ navigation }) => {
  const goToSecond = () => {
    navigation.navigate('Info');
  };

  return (
    <TouchableOpacity onPress={() => goToSecond()}>
      <Text style={styles.h1}>Навигация работает?</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  h1: {
    backgroundColor: '#FFB9DEFF',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 30,
    textAlign: 'center',
  },
});

export default FirstScreen;
