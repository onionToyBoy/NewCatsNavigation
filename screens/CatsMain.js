import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Search } from '../components/Search';
import { CatsList } from '../components/CatsList';
import { state } from '../state';
import { colors } from '../constants/colors';

const CatsMain = ({ navigation }) => {
  const [cats, setCats] = useState(state);

  const goToCat = cat => {
    navigation.navigate('Cat', { cat });
  };

  const searchCat = text => {
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
});

export default CatsMain;
