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

const armWidth = height*0.117;
const boxHeight = height*0.057;
const boxWidth = height*0.057;
export default class Movein extends Component {


  constructor(){
    super();
    this.state = {
        moveArm: new Animated.Value(-(height+boxHeight)),
        moveBoxToTop: new Animated.Value(-(height*0.1-20)),
        moveBoxToRight: new Animated.Value(-boxWidth),
        twirlBox: new Animated.Value(0),
        changePic:false,

        infinite:true,

    }
  }

  componentWillMount(){
      {this.Catch()}

  }
  Catch(){
    // if(this.state.infinite){


          Animated.sequence([
            Animated.timing(            //盒子出現 2s'
            this.state.moveBoxToRight,
            {
              toValue:width*0.7+((armWidth/2)-(boxWidth*0.5)),
              friction: 1,
              duration:1800,
              delay:200,
            }),
            Animated.timing(             //盒子旋轉 1.5s'
            this.state.twirlBox,
            {
              toValue:1,
              duration:1400,
              delay:100,
            }),

            Animated.timing(            //爪子下降 2.2s'
            this.state.moveArm,
            {
              toValue: -(height*0.1-20),
              friction: 1,
              easing: Easing.out(Easing.poly(4)),
              duration:2000,
              delay:200,
            }),
            Animated.parallel([     //爪子升起 1.3s'
              Animated.timing(
              this.state.moveArm,
              {
                toValue: -(height+boxHeight),
                friction: 1,
                easing: Easing.in(Easing.poly(4)),
                duration:1100,
                delay:200,
              }),
              Animated.timing(      //盒子同時升起
              this.state.moveBoxToTop,
              {
                toValue: -(height+boxHeight),
                friction: 1,
                easing: Easing.in(Easing.poly(4)),
                duration:1100,
                delay:200,
              }),
            ]),

          ]).start();
          setTimeout(()=>{      //爪子打開
            this.setState({
              changePic:true,
            })
          },4000);
          setTimeout(()=>{      //爪子關閉
            this.setState({
              changePic:false,
            })
          },5300);
      //}
  }

  render() {
    var pic = this.state.changePic ? require('../img/catchAnimation/爪子02.png') :require('../img/catchAnimation/爪子01.png');

    return (
      <View style={styles.container}>

          <Animated.View

             style={{
               flex:1,
               position:'absolute',
               marginTop:20,
               top:this.state.moveArm,

             }}>
             <View style={{height:height,width:height*0.117,marginLeft:width*0.7}}>
                  <Image source={pic} style={{height:height,width:height*0.117}} />
             </View>
           </Animated.View>
           <Animated.Image
               source={require('../img/catchAnimation/箱子.png')}
               style={{
                 height:boxHeight,
                 width:boxWidth,
                 marginLeft:this.state.moveBoxToRight,
                 marginTop:height,
                 top:this.state.moveBoxToTop,
                 transform:[{
                   rotate: this.state.twirlBox.interpolate({
                   inputRange: [0,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
                   outputRange: ['0deg','0deg','25deg','-25deg','25deg','-25deg','25deg','-25deg','0deg','0deg']
                 })}] }}
          />

      </View>
    );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightSide: {
      alignSelf:'flex-end',
      backgroundColor:'red',
      width:200,
      height:height,
  },

});

AppRegistry.registerComponent('Movein', () => Movein);
