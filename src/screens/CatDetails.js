import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { InfoBlock } from '../components/InfoBlock';
import { randomFactsGenerator } from '../randomFactsGenerator';
import { colors } from '../constants/colors';

const CatDetails = ({ route }) => {
  const { cat } = route.params;
  const randomFact = randomFactsGenerator.getRandomFact();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.deepBlue, colors.dullBlue, colors.deepPurple]}
        style={styles.container}
      >
        <ScrollView style={styles.container}>
          <View style={styles.info}>
            <Image source={cat.photo} style={styles.image} />
            <View style={styles.description}>
              <InfoBlock info={cat.bread} title={'Порода:'} />
              <InfoBlock info={cat.age} title={'Возраст:'} />
              <InfoBlock info={cat.info} title={'Описание:'} />
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Рандомный факт о котах:</Text>
              <Text style={styles.bottomInfo}>{randomFact}</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
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
    height:200,
    margin: 25,
    resizeMode: 'contain',
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

export default CatDetails;
