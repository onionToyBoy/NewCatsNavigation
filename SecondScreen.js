
import React from 'react'
import { StyleSheet, Text} from 'react-native'


const SecondScreen = () => {

  return (
    <>
      <Text style={styles.h1}>Да, это так!</Text>
     </>
  )
}

const styles = StyleSheet.create({
  h1: {
    backgroundColor: '#93CAFFFF',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 30,
    textAlign: 'center'
  }
})

export default SecondScreen