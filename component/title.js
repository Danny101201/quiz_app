import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ titleText }) => {
  return (
    <Text style={styles.text}>{titleText}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40
  },
});
export default Title