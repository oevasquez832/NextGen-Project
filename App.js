import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Attempting to update framework to include AuthLoadingScreen
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen';
// screen imports
import WelcomeScreen from './src/components/screens/WelcomeScreen';
import SignUpScreen from './src/components/screens/SignUpScreen';
import SignInScreen from './src/components/screens/SignInScreen';
import ForgetPasswordScreen from './src/components/screens/ForgetPasswordScreen';

// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `NextGen App!`, // for the header screen
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

const App = createAppContainer(AuthStackNavigator);
export default App;

/*
export default createSwitchNavigator({
  //screen: name
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator, //Auth stack
}); 
*/

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