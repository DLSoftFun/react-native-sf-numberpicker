/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SFNumberPicker from "react-native-sf-numberpicker";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SFNumberPicker width={200} height={50} style={{marginLeft:10}} maxNumber={20} onNumberChanged={this.onNumberChange} fontSize={20}/>
      </View>
    );
  }
    onNumberChange=(tag,number)=>{
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      alignItems:'center',
      justifyContent:'center'
  },
});
