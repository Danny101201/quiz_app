import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Success from '../image/success.svg'
import Failure from '../image/failure.svg'

import Title from '../component/title';
import ImagePic from '../component/image';
import Button from '../component/button';

const Result = ({ navigation, route }) => {
  const { score } = route.params
  const handlePress = () => navigation.navigate('Home')
  return (
    <View style={styles.container}>
      <Title titleText={`Result : ${score}`} />
      <ImagePic image={score > 60 ? <Success /> : <Failure />} />
      <Button onPress={handlePress} btnText='Home' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50
  },
  imageContainer: {
    height: 250,
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
  }
})
export default Result