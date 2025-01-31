import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import icedCoffeeImg from '@/assets/images/iced-coffee.png'

const app = () => {
  return (
    <View style={styles.constainer}>
      <ImageBackground 
        source={icedCoffeeImg} 
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>
          Coffe Shop
        </Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})