import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Dimensions from 'Dimensions';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height-STATUSBAR_HEIGHT;

// <Animated.Image                         // 基础组件: Image, Text, View
//   source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
//   style={{
//     flex: 1,
//
//   }}
// />

// <TouchableHighlight
//   onPress={this.onPressButton.bind(this)}
//   style={styles.button}
//   >
//   <Text style={styles.welcome}
//   >
//   </Text>
// </TouchableHighlight>

export default class Category extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValueColor: new Animated.Value(0),
      bounceValue: new Animated.Value(0.95*width),
      bounceValueTop: new Animated.Value(height-0.05*width),
      bounceValueBackColor: new Animated.Value(0),
      bounceValueButtonColor: new Animated.Value(0),
    };
  }
  onPressButton(){
    Animated.parallel([
    Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
      this.state.bounceValue,
      {
        toValue: 0.3*width,  // 目标值
        friction: 1 // 动画方式的参数
      }),
    Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
      this.state.bounceValueTop,
      {
        toValue: 0.3*height,
        friction:1
      }),
    Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
      this.state.bounceValueColor,
      {
        toValue: 150,  // 目标值
        friction: 1 // 动画方式的参数
      }),
    Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
      this.state.bounceValueBackColor,
      {
        toValue: 150,  // 目标值
        friction: 1 // 动画方式的参数
      }),
      Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
        this.state.bounceValueButtonColor,
        {
          toValue: 150,  // 目标值
          friction: 1 // 动画方式的参数
        }),
    ]).start();  // 开始
  }
  onPressReturn(){
    Animated.parallel([
      Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
        this.state.bounceValue,
        {
          toValue: 0.95*width,  // 目标值
          friction: 1 // 动画方式的参数
        }),
      Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
        this.state.bounceValueTop,
          {
            toValue: height-0.05*width,
            friction:1
          }),
      Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
        this.state.bounceValueColor,
        {
          toValue: 0,  // 目标值
          friction: 1 // 动画方式的参数
        }),
      Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
        this.state.bounceValueBackColor,
        {
          toValue: 0,  // 目标值
          friction: 1 // 动画方式的参数
        }),
      Animated.timing(  // 支持: spring, decay, timing，过渡的动画方式
        this.state.bounceValueButtonColor,
        {
          toValue: 0,  // 目标值
          friction: 1 // 动画方式的参数
        }),
    ]).start();  // 开始
  }
  _renderListView(){
    let test =this.state.bounceValueColor.interpolate({
        inputRange: [0, 150],
        outputRange: ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']
      });

    var list = [{},{},{},{},{},{},{},{},{},{}];
    var ShowList=list.map(function (val, index) {

    return <View key={index} style={{ }}>
      <TouchableHighlight
        onPress={()=>{}}
        style={{width: 300, height: 45,backgroundColor:'white'}}
      >
        <Text
        style={{color:'black'}}>
        log in +index
        </Text>
      </TouchableHighlight>
    </View>
    })
    return(
      <Animated.View // 支持: Image, Text, View
        style={
            {
              backgroundColor:test,

              position:'absolute',
              top:this.state.bounceValueTop,
              left:this.state.bounceValue,
              right:0.05*width,
              bottom:0.05*width,

            }
        }>
        <ScrollView showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.contentContainer}>
          {ShowList}
        </ScrollView>
      </Animated.View>
    )
  }
  _renderTouchBackground(){
    let testback=this.state.bounceValueBackColor.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgba(255,255,255,1)', 'rgba(150,150,150,1)']
    });
    return <TouchableWithoutFeedback
      onPress={this.onPressReturn.bind(this)}
      style={
        {
          flex:1,
          backgroundColor:'rgba(0,0,0,0)',
        }
      }>
      <Animated.View style={
        {
          flex:1,
          backgroundColor: testback,
        }
      }>

      </Animated.View>
    </TouchableWithoutFeedback>
  }
  _renderTouchButton()
  {
    return <TouchableHighlight
      onPress={this.onPressButton.bind(this)}
      style={
        {
          position:'absolute',
          height: 0.15*width,
          width: 0.15*width,
          backgroundColor:'black',
          right:0.05*width,
          bottom:0.05*width,
        }
      }
    >
      <Text style={styles.welcome}
      >

      </Text>
    </TouchableHighlight>
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderTouchBackground()}
        {this._renderTouchButton()}
        {this._renderListView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
//    borderWidth: 1,
//    padding: 50,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  botton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
});
