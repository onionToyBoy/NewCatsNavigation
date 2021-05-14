import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { InfoBlock } from '../components/InfoBlock';
import { randomFactsGenerator } from '../utils/randomFactsGenerator';
import { colors } from '../constants/colors';

export const CatDetails = ({ route }) => {
  const { photo, bread, age, info } = route.params.cat;
  const randomFact = randomFactsGenerator.getRandomFact();

  return (
    <LinearGradient
      colors={[colors.deepBlue, colors.dullBlue, colors.deepPurple]}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.info}>
          <Image source={photo} style={styles.image} />
          <View style={styles.description}>
            <InfoBlock info={bread} title={'Порода:'} />
            <InfoBlock info={age} title={'Возраст:'} />
            <InfoBlock info={info} title={'Описание:'} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Рандомный факт о котах:</Text>
            <Text style={styles.bottomInfo}>{randomFact}</Text>
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
  info: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  image: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  description: {
    borderBottomWidth: 1,
    borderBottomColor: colors.darkBlue,
    borderTopWidth: 1,
    borderTopColor: colors.darkBlue,
    paddingVertical: 15,
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
