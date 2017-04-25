import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';


const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
export default class Movein extends Component {


  constructor(){
    super();
    this.state = {
        moveAnimToBottom: new Animated.Value(-(height*0.36)),
        moveAnimToTop: new Animated.Value(-(height*0.65)),
        moveAnimToRight: new Animated.Value(-(width*0.41)),
        moveAnimToLeft: new Animated.Value(-(width*0.46)),
    }
  }
  componentWillMount(){
    Animated.parallel([
      Animated.timing(
      this.state.moveAnimToLeft,
      {
        toValue: 22,
        friction: 1,
        easing: Easing.out(Easing.poly(4)),
        duration:1200,
        delay:200,
      }),
      Animated.timing(
      this.state.moveAnimToRight,
      {
        toValue: 15,
        friction: 1,
        duration:1000,
        easing: Easing.out(Easing.poly(4)),
        delay:400,
      }),
      Animated.timing(
      this.state.moveAnimToTop,
      {
        toValue: -150,
        friction: 1,
        easing: Easing.out(Easing.poly(4)),
        duration:950,
        delay:450,
      }),
      Animated.timing(
      this.state.moveAnimToBottom,
      {
        toValue: 40,
        friction: 1,
        easing: Easing.out(Easing.poly(4)),
        duration:800,
        delay:600,
      }),
      ]).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
           style={{
             flex:1,
             position:'absolute',
             right:this.state.moveAnimToLeft,
           }}
         >
            <View style={{top:height*0.17,width:width*0.46,height:height*0.48}}>
              <Image  style={{width:width*0.46,height:height*0.48}} source={require('../img/HOME-chanmao.png')} />
            </View>
        </Animated.View>
        <Animated.View
           style={{
             flex:1,
             position:'absolute',
             left:this.state.moveAnimToRight,
           }}
         >
          <View style={{bottom:height*0.13,width:width*0.41,height:height*0.42}}>
              <Image  style={{width:width*0.41,height:height*0.42}} source={require('../img/HOME-box.png')} />
          </View>
        </Animated.View>
        <Animated.View                            // Special animatable View
           style={{
             flex:1,
             position:'absolute',
             bottom:this.state.moveAnimToTop,
           }}
         >
          <View style={{paddingRight:width*1.62,width:width*0.7,height:height*0.6}}>
            <Image style={{width:width*0.75,height:height*0.65}} source={require('../img/HOME-myprofile.png')} />
          </View>
        </Animated.View>
        <Animated.View
           style={{
             flex:1,
             position:'absolute',
             top:this.state.moveAnimToBottom,
           }}
         >
          <View style={{left:width*0.22,width:width*0.19,height:height*0.36}}>
              <Image style={{width:width*0.19,height:height*0.36}} source={require('../img/HOME-setting.png')} />
          </View>
        </Animated.View>
      </View>
    );
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

AppRegistry.registerComponent('Movein', () => Movein);
