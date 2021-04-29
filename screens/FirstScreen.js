import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FirstScreen = ({ navigation }) => {
  const goToSecond = () => {
    navigation.navigate('Info');
  };

  return (
    <TouchableOpacity onPress={() => goToSecond()}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text style={styles.h1}>Навигация работает?</Text>
      </LinearGradient>
    </TouchableOpacity>
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

export default FirstScreen;
