import { View, StyleSheet } from 'react-native'
import React from 'react'

const imagePic = ({ image }) => {
  return (
    <View style={styles.imageContainer}>
      {image}
    </View>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flex: 1,
    height: 250,
  },

});
export default imagePic