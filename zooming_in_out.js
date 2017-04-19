import React, { Component } from 'react';
import {
  Animated,
  View
} from 'react-native';

export default class ZoomingInOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: new Animated.Value(0)
    };
  }
  render() {
    return (
      <Animated.View style={{width:this.state.size, height:this.state.size, backgroundColor:'orange'}}>
        <View style={{width:20,height:20,backgroundColor:'black'}} />
        <View style={{width:30,height:30,backgroundColor:'green'}} />
      </Animated.View>
    );
  }
  open() {
    Animated.timing(
      this.state.size,
      {toValue:50}
    ).start();
  }
  close() {
    Animated.timing(
      this.state.size,
      {toValue:0}
    ).start();
  }
}
