import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';

export default class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      income: '0',
      perMinute: 0,
      total: 0
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }

   componentWillUnmount() {
     this.clearInterval(this.state.timer);
   }

   tick =() => {
     this.setState({
       total: this.state.total + (this.state.perMinute / 60)
     });
   }

  handleChange = (income) => {
    const perHour = ( income / 52) /40
    const perMinute = (perHour / 60).toFixed(2)
    this.setState({
      income, perMinute
    })
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.income}
        />
        <Text>You earn ${this.state.perMinute} per minute </Text>
        <Text>You have earnt ${this.state.total.toFixed(2)} so far  </Text>
      </View>

    );
  }
}
