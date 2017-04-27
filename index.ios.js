import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  Animated,
  Easing,
  Dimensions,



} from 'react-native';
import InfoPage from './intro/infoPage'
import OrderConfirm from './order/orderConfirm'
import IndexPage from './order/indexPage'
import PayIndex from './payment/payIndex'
import Keyboard from './keyboard/keyboard'
import KybInterface from './keyboard/interface'
import Movein from './animation/movein'
import Catch from './animation/catch'
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
export default class cmInfo extends Component {
  render() {
    // return (
    //   <NavigatorIOS
    //
    //     style={{
    //       flex:1
    //     }}
    //     initialRoute={{
    //       component: Movein,
    //       title:'Movein',
    //
    //     }}
    //     />
    // );
    return(
      <Movein />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cmInfo', () => cmInfo);
