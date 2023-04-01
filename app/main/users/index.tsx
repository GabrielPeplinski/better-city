import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create User Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082942'
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
  text: {
    color: 'white'
  }
});