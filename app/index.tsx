import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text>Login Page</Text>
        <Text></Text>
        <Link href='/users'>Go to users</Link>
      </View>
    )
  }
}