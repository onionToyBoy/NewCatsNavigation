import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export const Cat = ({ cat, goToCat }) => {
  return (
    <TouchableOpacity style={styles.outerContainer} onPress={() => goToCat(cat)}>
      <View style={styles.nameAndBreadBlock}>
        <Text style={styles.catName}>{cat.name}</Text>
        <Text style={styles.catBread}>{cat.bread}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={cat.photo} style={styles.image} />
        <Text style={styles.textInfo}>{cat.info}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    margin: 20,
    padding: 10,
    borderColor: '#C1807CFF',
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
    borderBottomColor: '#C1807CFF',
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
