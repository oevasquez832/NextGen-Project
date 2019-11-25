import {
    StyleSheet,
    View,
    Text,
  } from 'react-native'
  export default class NewPassword extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Forgot Password?</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aa73b7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })