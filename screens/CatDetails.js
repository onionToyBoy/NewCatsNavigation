import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { InfoBlock } from '../components/InfoBlock';
import { randomFactsGenerator } from '../randomFactsGenerator';
import { colors } from '../constants/colors';

const CatDetails = ({ route }) => {
  let { cat } = route.params;
  return (
    <LinearGradient
      colors={[colors.deepBlue, colors.dullBlue, colors.deepPurple]}
      style={styles.container}
    >
      <ScrollView style={styles.scroll}>
        <View style={styles.secondContainer}>
          <Image source={cat.photo} style={styles.image} />
          <InfoBlock cat={cat} />
          <View style={styles.randomFactsBlock}>
            <Text style={styles.randomFactsTitle}>Рандомный факт о котах:</Text>
            <Text style={styles.randomInfo}>{randomFactsGenerator.getRandomFact()}</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  secondContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: 180,
    margin: 25,
    alignItems: 'flex-start',
  },
  randomFactsBlock: {
    width: '90%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomFactsTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.brightBlue,
    marginBottom: 10,
  },
  randomInfo: {
    fontSize: 15,
    marginBottom: 20,
  },
});
export default CatDetails;
