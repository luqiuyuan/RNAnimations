/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ZoomingInOut from './zooming_in_out';

export default class RNAnimations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zooming_in_out_button: 'open'
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: '#F5FCFF'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:100, height:50, backgroundColor:'gray'}}
            onPress = {this.state.zooming_in_out_button=='open'? this._openZoomingInOut.bind(this) : this._closeZoomingInOut.bind(this)}>
            <Text>{this.state.zooming_in_out_button=='open'? "Open" : "Close"}</Text>
          </TouchableOpacity>
          <ZoomingInOut
            ref = 'zooming_in_out' />
        </View>
      </View>
    );
  }

  _openZoomingInOut() {
    this.refs.zooming_in_out.open();
    this.setState({zooming_in_out_button:'close'});
  }
  _closeZoomingInOut() {
    this.refs.zooming_in_out.close();
    this.setState({zooming_in_out_button:'open'});
  }
}

AppRegistry.registerComponent('RNAnimations', () => RNAnimations);
