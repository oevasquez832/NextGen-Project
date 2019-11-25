import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
export default createSwitchNavigator({
  // screen: name
  AuthLoading: AuthLoadingScreen
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
