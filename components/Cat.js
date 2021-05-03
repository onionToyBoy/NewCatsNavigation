import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../constants/colors';

export const Cat = ({ cat, goToCat }) => {
  const moveToCatDetails = () => goToCat(cat);
  let{name, bread, photo, info} = cat;
  return (
    <TouchableOpacity style={styles.outerContainer} onPress={moveToCatDetails}>
      <View style={styles.nameAndBreadBlock}>
        <Text style={styles.catName}>{name}</Text>
        <Text style={styles.catBread}>{bread}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={photo} style={styles.image} />
        <Text style={styles.textInfo}>{info}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    margin: 20,
    padding: 10,
    borderColor: colors.chalkyClay,
    borderWidth: 1,
    borderRadius: 7,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catName: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  catBread: {
    color: 'black',
    fontSize: 15,
    alignItems: 'flex-end',
  },
  nameAndBreadBlock: {
    borderBottomWidth: 1,
    borderBottomColor: colors.chalkyClay,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfo: {
    color: 'black',
    fontSize: 15,
    margin: 0,
  },
  image: {
    width: '80%',
    height: 120,
    margin: 15,
  },
});
