import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { colors } from '../constants/colors';

export const Cat = ({ cat, onPressItem }) => {
  const { name, bread, photo, info } = cat;

  const moveToCatDetails = () => onPressItem(cat);

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
  },
  name: {
    color: colors.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  bread: {
    color: colors.black,
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
    color: colors.black,
    fontSize: 15,
  },
  image: {
    width: '90%',
    height: 'auto',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
});
