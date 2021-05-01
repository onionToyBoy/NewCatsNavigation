import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Search } from '../components/Search';
import { CatsGenerator } from '../components/CatsGenerator';
import { state } from '../state';

const MainScreen = ({ navigation }) => {
  const [cats, setCats] = useState(state);

  //Функция перехода на другую страницу:

  const goToCat = cat => {
    navigation.navigate('Cat', { cat });
  };

  //Функция поиска по странице:

  const searchCat = function (text) {
    setCats(
      state.filter(
        el =>
          el.name.toLowerCase().includes(text.toLowerCase()) ||
          el.bread.toLowerCase().includes(text.toLowerCase()) ||
          el.info.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#992C25FF', '#B5342CFF', '#520E0CFF']} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Hello, I am a Header!</Text>
          <CatsGenerator cats={cats} goToCat={goToCat} />
        </SafeAreaView>
      </LinearGradient>
      <SafeAreaView>
      <Search searchCat={searchCat} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    margin: 5,
  },
  search: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFFFFFAD',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 8,
  },
});

export default MainScreen;
