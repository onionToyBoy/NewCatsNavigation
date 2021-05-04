import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SearchBar } from '../components/SearchBar';
import { CatsList } from '../components/CatsList';
import { state } from '../state';
import { colors } from '../constants/colors';
import { routes } from '../constants/routes';

const CatsMain = ({ navigation }) => {
  const [cats, setCats] = useState(state);

  const goToCat = cat => {
    navigation.navigate(routes.CatDetails, { cat });
  };

  const searchCat = text => {
    setCats(
      state.filter(
        cat =>
          cat.name.toLowerCase().includes(text.toLowerCase()) ||
          cat.bread.toLowerCase().includes(text.toLowerCase()) ||
          cat.info.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.scarletRed, colors.brightRed, colors.darkRed]}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Hello, I am a Header!</Text>
          <CatsList cats={cats} goToCat={goToCat} />
        </SafeAreaView>
      </LinearGradient>
      <SafeAreaView>
        <SearchBar searchCat={searchCat} />
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
});

export default CatsMain;
