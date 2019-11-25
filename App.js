import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createSwitchNavigator,createStackNavigator} from 'react-navigation'
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})
export default createSwitchNavigator({
  // screen: name
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator, //Auth stack
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
