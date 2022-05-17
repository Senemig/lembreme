import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from './style';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>lembre.me</Text>
      </View>
    );
  }
}
