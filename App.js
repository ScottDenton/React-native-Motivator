import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyInput from './src/components/MyInput'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>How much do you earn per year</Text>
        <MyInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
