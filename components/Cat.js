import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../constants/colors';

export const Cat = ({ cat, goToCat }) => {
  const moveToCatDetails = () => goToCat(cat);
  let{name, bread, photo, info} = cat;
  return (
    <TouchableOpacity style={styles.container} onPress={moveToCatDetails}>
      <View style={styles.nameAndBreadBlock}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bread}>{bread}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={photo} style={styles.image} />
        <Text style={styles.textInfo}>{info}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderColor: colors.chalkyClay,
    borderWidth: 1,
    borderRadius: 7,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  bread: {
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
  },
  image: {
   height: 180,
    margin: 15,
    resizeMode:'contain',
  },
});
