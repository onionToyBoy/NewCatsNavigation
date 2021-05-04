import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SearchBar } from '../components/SearchBar';
import { CatsList } from '../components/CatsList';
import { mockData } from '../mockData';
import { colors } from '../constants/colors';
import { routes } from '../constants/routes';

const CatsMain = ({ navigation }) => {
  const [cats, setCats] = useState(mockData);

  const goToCat = cat => {
    navigation.navigate(routes.CatDetails, { cat });
  };

  const onSearch = text => {
    setCats(
      mockData.filter(
        cat =>
          cat.name.toLowerCase().includes(text.toLowerCase()) ||
          cat.bread.toLowerCase().includes(text.toLowerCase()) ||
          cat.info.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.scarletRed, colors.brightRed, colors.darkRed]}
        style={styles.container}
      >
        <Text style={styles.header}>Hello, I am a Header!</Text>
        <CatsList cats={cats} goToCat={goToCat} />
      </LinearGradient>
      <SearchBar onSearch={onSearch} />
    </SafeAreaView>
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
