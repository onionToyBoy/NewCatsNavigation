import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { InfoBlock } from '../components/InfoBlock';
import { randomFactsGenerator } from '../randomFactsGenerator';
import { colors } from '../constants/colors';

const CatDetails = ({ route }) => {
  const { cat } = route.params;
  let randomFact = randomFactsGenerator.getRandomFact();
  return (
    <LinearGradient
      colors={[colors.deepBlue, colors.dullBlue, colors.deepPurple]}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.info}>
          <Image source={cat.photo} style={styles.image} />
          <InfoBlock cat={cat} />
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Рандомный факт о котах:</Text>
            <Text style={styles.bottomInfo}>{randomFact}</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 210,
    margin: 25,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
  bottomContainer: {
    paddingTop: 15,
    paddingHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.brightBlue,
    marginBottom: 10,
  },
  bottomInfo: {
    fontSize: 15,
    marginBottom: 20,
  },
});
export default CatDetails;
