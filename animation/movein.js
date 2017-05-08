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
  TouchableWithoutFeedback,
} from 'react-native';


const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;

//7 plus:h-736,w-414 //
const CMsizeScale = height< 600 ? 0.26 : (height < 730 ? 0.32:0.34);
const CMheightScale = height< 600 ? 1 : (height < 730 ? 0.88:0.8);
const CMwidth = width< 370 ? 65 : (width < 410 ? 75:80);
const CMZoominScale = height< 600 ? 0.84 : (height < 730 ? 1: 1.1);
const CMZoominHeight = height< 600 ? 0.83 : (height < 730 ? 0.73 : 0.65);

const BoxsizeScale = height< 600 ? 0.28 : (height < 730 ? 0.34:0.35);
const BoxheightScale = height< 600 ? 1.1 :(height < 730 ? 0.95:0.9);
const Boxwidth = width< 370 ? 85 : (width < 410 ? 100 :110);
const BoxZoominScale = height< 600 ? 1 : (height < 730 ? 1.2 : 1.3);
const BoxZoominHeight = height< 600 ? 0.9 : (height < 730 ? 0.75 : 0.68);

var BoxZoomed = false;
var CMZoomed = false;
export default class Movein extends Component {


  constructor(){
    super();

    console.log(width)
    this.state = {
        moveAnimToBottom: new Animated.Value(-(height*0.36)),
        moveAnimToTop: new Animated.Value(-(height*0.65)),

        CMPicBottom:new Animated.Value(40),


        CMPan: new Animated.ValueXY({x:200,y:height*CMheightScale}),
        // CMScale:new Animated.Value(0.34),
        CMScale:new Animated.Value(CMsizeScale),
        BoxPan: new Animated.ValueXY({x:-400,y:-(height*BoxheightScale)}),
        // BoxScale: new Animated.Value(0.35),
        BoxScale: new Animated.Value(BoxsizeScale),
    }
  }
  componentWillMount(){
    Animated.parallel([
      Animated.timing(
      this.state.CMPan,
      {
        toValue: {x:CMwidth,y:height*CMheightScale},
        // friction: 1,
        easing: Easing.out(Easing.poly(4)),
        duration:1200,
        delay:200,
      }),
      Animated.timing(
      this.state.BoxPan,
      {
        toValue: {x:-Boxwidth, y:-(height*BoxheightScale)},
        // friction: 1,
        duration:1000,
        easing: Easing.out(Easing.poly(4)),
        delay:400,
      }),
      Animated.timing(
      this.state.moveAnimToTop,
      {
        toValue: -150,
        // friction: 1,
        easing: Easing.out(Easing.poly(4)),
        duration:950,
        delay:450,
      }),
      Animated.timing(
      this.state.moveAnimToBottom,
      {
        toValue: 40,
        // friction: 1,
        easing: Easing.out(Easing.poly(4)),
        duration:800,
        delay:600,
      }),
      ]).start();
  }

  onPressCMZoomin(){
    Animated.parallel([
      Animated.timing(
      this.state.CMPan,
      {
        toValue: {x:-30,y:height*CMZoominHeight},
        // friction: 1,
        duration:300,
        delay:100,
      }),
      Animated.timing(
      this.state.CMScale,
      {
        toValue: CMZoominScale,
        // friction: 1,
        duration:300,
        delay:100,
      }),

      Animated.timing(
      this.state.BoxPan,
      {
        toValue: {x:-400, y:-(height*BoxheightScale)},
        // friction: 1,
        duration:300,
        // delay:100,
      }),
      Animated.timing(
      this.state.moveAnimToTop,
      {
        toValue: -(height*0.65),
        // friction: 1,
        duration:300,
        // delay:100,
      }),
      Animated.timing(
      this.state.moveAnimToBottom,
      {
        toValue: -(height*0.36),
        // friction: 1,
        duration:300,
        // delay:100,
      }),
    ]).start();

    CMZoomed = true;


  }
  onPressCMZoomout(){
    Animated.parallel([
      Animated.timing(
      this.state.CMPan,
      {
        toValue: {x:CMwidth,y:height*CMheightScale},
        // friction: 1,
        duration:400,
        // delay:100,
      }),
      Animated.timing(
      this.state.CMScale,
      {
        toValue: CMsizeScale,
        // friction: 1,
        duration:400,
        // delay:100,
      }),
      Animated.timing(
      this.state.BoxPan,
      {
        toValue: {x:-Boxwidth, y:-(height*BoxheightScale)},
        // friction: 1,
        duration:400,
        delay:100,
      }),
      Animated.timing(
      this.state.moveAnimToTop,
      {
        toValue: -150,
        // friction: 1,
        duration:400,
        delay:100,
      }),
      Animated.timing(
      this.state.moveAnimToBottom,
      {
        toValue: 40,
        // friction: 1,
        duration:400,
        delay:100,
      }),

      ]).start();



    CMZoomed = false;

  }
  onPressBoxZoomin(){

      Animated.parallel([

        Animated.timing(
          this.state.BoxScale,
          {toValue:BoxZoominScale,duration:300,delay:100}
        ),
        Animated.timing(
          this.state.BoxPan,
          {toValue:{x:-35,y:-(height*BoxZoominHeight)},duration:300,delay:100}
        ),
        Animated.timing(
        this.state.CMPan,
        {
          toValue: {x:200,y:height*CMheightScale},
          friction: 1,
          duration:300,
          // delay:100,
        }),
        Animated.timing(
        this.state.moveAnimToTop,
        {
          toValue: -(height*0.65),
          friction: 1,
          duration:300,
          // delay:100,
        }),
        Animated.timing(
        this.state.moveAnimToBottom,
        {
          toValue: -(height*0.36),
          friction: 1,
          duration:300,
          // delay:100,
        }),
      ]).start();

      BoxZoomed = true;

  }
  onPressBoxZoomout(){
    Animated.parallel([
      Animated.timing(
        this.state.BoxScale,
        {toValue:BoxsizeScale,duration:400}
      ),
      Animated.timing(
        this.state.BoxPan,
         {toValue:{x:-Boxwidth, y:-(height*BoxheightScale)},duration:400}
      ),
      Animated.timing(
      this.state.CMPan,
      {
        toValue: {x:CMwidth,y:height*CMheightScale},
        // friction: 1,
        duration:400,
        delay:100,
      }),
      Animated.timing(
      this.state.moveAnimToTop,
      {
        toValue: -150,
        // friction: 1,
        duration:400,
        delay:100,
      }),
      Animated.timing(
      this.state.moveAnimToBottom,
      {
        toValue: 40,
        // friction: 1,
        duration:400,
        delay:100,
      }),
      ]).start();

      BoxZoomed = false;


  }

  render() {
    console.log(height)
    let {BoxPan} = this.state;
    let {CMPan} = this.state;
    // let scale = this.state.BoxScale ;
    // let rotate = '0deg';
    // let [translateX,translateY] = [BoxPan.x,BoxPan.y];
    let BoxStyle = {transform:[{translateX:BoxPan.x},{translateY:BoxPan.y},{rotate:'0deg'},{scale:this.state.BoxScale}]}
    let CMStyle = {transform:[{translateX:CMPan.x},{translateY:CMPan.y},{rotate:'0deg'},{scale:this.state.CMScale}]}
    return (
      <View style={styles.container}>




        <Animated.View
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
        <TouchableWithoutFeedback  onPress={()=>{CMZoomed?this.onPressCMZoomout():this.onPressCMZoomin()}}>
            <Animated.View style={CMStyle}>

               <Image source={require('../img/HOME-chanmao.png')}/>
             </Animated.View>
        </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={()=>{BoxZoomed?this.onPressBoxZoomout():this.onPressBoxZoomin()}}>

            <Animated.View style={BoxStyle}>
              <Image source={require('../img/HOME-box.png')}/>
            </Animated.View>
          </TouchableWithoutFeedback>
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
