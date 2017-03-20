import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  ViewPagerAndroid,
} from 'react-native';
import Dimensions from 'Dimensions';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height-STATUSBAR_HEIGHT;
let PAGES=2;
let page=0;
let PageNow=0;
var list = [{},{},{},{},{},{},{},{},{},{}];
var ShowList;
var this1;
export default class Payment extends Component {
  constructor(props: any) {
    super(props);
    this1=this;
    this.state = {
      bounceValueBackColor: new Animated.Value(1),
      bounceValueToTop: new Animated.Value(height-60),
      flag:false,
      renderCheckoutBtn:true,
      CurrentCard:0,
    };
    this._TouchableToNext=this._TouchableToNext.bind(this);
    this._TouchableToPrev=this._TouchableToPrev.bind(this);
    this._onPress = this._onPress.bind(this);
  }
  onPageSelected(e) {

    page=e.nativeEvent.position;
    console.log('page change to '+page);
    if (this1.state.CurrentCard!=page) this1.setState({CurrentCard:page});
    console.log('current '+this1.state.CurrentCard);
  }
  _TouchableToNext(now){
    console.log('now '+now);
    console.log('page '+page);
    if (now!=page) return;
    if(this.refs.viewPage){
      page=page+1;this.refs.viewPage.setPage(page);

      if (this1.state.CurrentCard!=page) this1.setState({CurrentCard:page});
      console.log('current '+this1.state.CurrentCard);
    }
  }
  _TouchableToPrev(now){
      console.log('now '+now);
      console.log('page '+page);
        if (now!=(page-1)) return;
    if(this.refs.viewPage){
      page=page-1;this.refs.viewPage.setPage(page);

      if (this1.state.CurrentCard!=page) this1.setState({CurrentCard:page});
      console.log('current '+this1.state.CurrentCard);
    }
  }

  _onPressReturn(){
    this.setState({renderCheckoutBtn:true});
    Animated.parallel([
      Animated.timing(
      this.state.bounceValueToTop,
      {
        toValue: height-60,  // 到顶端距离的回弹
        friction: 1 // 动画方式的参数
      }),
      Animated.timing(
      this.state.bounceValueBackColor,
      {
        toValue: 1,  // 背景颜色橙色重新显示
        friction: 1 // 动画方式的参数
      }),
    ]).start();
    setTimeout( ()=> {
        this.setState({flag:false});
    }, 600);

  }
  _onPress(){
    if (this.state.bounceValueToTop._value!=height-60) return;
    Animated.parallel([
      Animated.timing(  // 弹出框到顶端的距离
      this.state.bounceValueToTop,
      {
        toValue: height-978/2208*height,  // 目标值
        friction: 1 // 动画方式的参数
      }),
      Animated.timing(  // 透明度渐变
      this.state.bounceValueBackColor,
      {
        toValue: 0,  // 目标值
        friction: 1 // 动画方式的参数
      }),
    ]).start();
    setTimeout( ()=> {
        this.setState({renderCheckoutBtn:false});
        this.setState({flag:true});
    }, 600);
  }
  _renderFrontButton(){
    if (this.state.renderCheckoutBtn)
    {
      return(
        <Animated.View style={{
          position:"absolute",
          left:0,right:0,top:0,bottom:0,
          opacity:this.state.bounceValueBackColor,
          backgroundColor:'rgba(255,97,0,1)',}}>
          <TouchableWithoutFeedback onPress={this._onPress}>
              <View style={{
                backgroundColor: 'rgba(0,0,0,0)',
                flex:1,}}>
                <Text style={{
                  position:'absolute',
                  top:75/2208*height,
                  fontSize:20,
                  left:265/1242*width,}}>
                   PAY
                </Text>
              </View>
          </TouchableWithoutFeedback>
        </Animated.View>
    );
    }
  }
  _renderBackButton(){
    if (this.state.flag){
      return (
        <View style={{
          flex:1,backgroundColor: 'rgba(0,0,0,0)',
          position:'absolute',
          left:0,
          right:0,
          top:0,
          bottom:(978/2208)*height,
        }}>
          <TouchableWithoutFeedback onPress={this._onPressReturn.bind(this)}
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
            }}>
            <View style={{
              backgroundColor: 'rgba(0,0,0,0)',
              flex:1,
            }}>

            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

  _prepareList()
  {
    var that = this;
    ShowList=list.map(function (val, index) {
      PageNow=index;
    return <View key={index} style={{flex:1,}}>

        <Image source={require('./img/card.png')}
          style={{
            position:'absolute',
            top:(256/2208*height),
            left:((201)/1242*width),
            width:(840/1242*width),
            height:(562/2208*height),
          }}>
        </Image>

      <TouchableWithoutFeedback onPress={()=>that._TouchableToNext(index)}
      >
        <View style={{
          position:'absolute',
          top:0,
          bottom:0,
          right:0,
          left:(1101/1242*width),
          backgroundColor:'rgba(0,0,0,0)',}}>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>that._TouchableToPrev(index)}
      >
        <View style={{
          position:'absolute',
          top:0,
          bottom:0,
          right:201/1242*width,
          left:(890/1242*width),
          backgroundColor:'rgba(0,0,0,0)',}}>
        </View>
      </TouchableWithoutFeedback>
    </View>

    })
  }
  _renderAnimated()
  {
    return <Animated.View style={{position:'absolute',
      top:this.state.bounceValueToTop,
      bottom:0,
      left:0,
      right:0,
      backgroundColor:'rgba(230,231,232,1)',}}>
        <Text style={{
          position:'absolute',
          top:75/2208*height,
          fontSize:20,
          left:265/1242*width,

        }}>
          SELECT CARD TO PAY
        </Text>
        <ViewPagerAndroid
          pageMargin={-100}
          style={{flex:1}}
          onPageSelected={this.onPageSelected}
          initialPage={0}
          ref="viewPage">

          {ShowList}
        </ViewPagerAndroid>
        {this._renderFrontButton()}
    </Animated.View>
  }
  render() {
    this._prepareList();
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>

        </View>
        {this._renderAnimated()}
        {this._renderBackButton()}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  containerTop: {
    position:'absolute',
    right:0,
    left:0,
    top:STATUSBAR_HEIGHT,
    bottom:0,
    backgroundColor: 'white',
  },
  containerBottom:{
    position:'absolute',
    top:height-60,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'#00FF00',
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
