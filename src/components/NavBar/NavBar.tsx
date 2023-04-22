import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

export default class NavBar {
  render() {
    return (
      <View>
        <Text>NavBar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    datePickerButton: {
        backgroundColor: 'blue'
    },
  });