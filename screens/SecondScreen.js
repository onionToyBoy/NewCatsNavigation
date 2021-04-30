import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SecondScreen = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
      <Text style={styles.h1}>Да, это так!</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 30,
    textAlign: 'center',
  },
});

export default SecondScreen;
