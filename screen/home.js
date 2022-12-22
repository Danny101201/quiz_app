import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Quiz from '../image/quiz-2.svg';
import Title from '../component/title';
import ImagePic from '../component/image';
import Button from '../component/button';
const Home = ({ navigation }) => {
  const handlePress = () => navigation.navigate('Quiz', { screen: 'Result' })
  return (
    <View style={styles.container}>
      <Title titleText={'Quizzar'} />
      <ImagePic image={<Quiz />} />
      <Button onPress={handlePress} btnText='Start' />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },

});