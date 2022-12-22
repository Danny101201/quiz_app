import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, btnText }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1A759F',
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#aaa',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },

});
export default Button