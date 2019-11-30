import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Attempting to update framework to include AuthLoadingScreen
import {createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
export default createSwitchNavigator({
  //screen: name
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator //Auth stack
});


/*Default Framework
export default class App extends React.Component {
  render() {
    return (
      <View style ={styles.container}>
        <Text>Welcome to the App!</Text>
      </View>
    )
  }
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 