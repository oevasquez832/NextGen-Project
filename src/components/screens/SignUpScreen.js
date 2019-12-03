import React from 'react';

import {
    StyleSheet,
    View,
    Text,
  } from 'react-native'
  export default class NewScreenName extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Join NextGen!</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'goldenrod',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })