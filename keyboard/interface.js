'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,

} from 'react-native';
import CMKeyBoard from './keyboard';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import CMMarker from './marker'
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;

export default class CMKeyBoardInterface extends Component {
    constructor(){
      super();

      this.state = {
            isOpen:false,
            isDateOpen:false,
            isCVVOpen:false,
            text:"",
            keyboardType:"monthYear",
            expMonth:"MM",
            expYear:"YYYY",
            cvv:"",
            bounceValueCardNumTop: new Animated.Value(0.05*height),
            bounceValueCardNumLeft: new Animated.Value(50),
            bounceValueCardNumFontSize: new Animated.Value(20),
            bounceValueDateTop: new Animated.Value(0.05*height),
            bounceValueDateFontSize: new Animated.Value(20),

            bounceValueCVVTop: new Animated.Value(0.05*height),
            bounceValueCVVFontSize: new Animated.Value(20),

            bounceValueMarker:new Animated.Value(1),
      }


    }
    showKeyboard(type){
      <CMKeyBoard kybType={type} />
    }
    renderMarker(){

      <CMMarker/>
    }
    _renderPlaceHolder(){
      if(this.state.cvv == ""){


        return(
          <Text style={{color:'#c9c9c9'}}>123</Text>
        )
      }

    }
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.cardNo}>
                        <TouchableWithoutFeedback onPress={()=>{this.showKeyboard("cardNum")}} >
                            <View style={styles.input}>

                                      <Animated.Text style={{
                                          position:'absolute',
                                          left:this.state.bounceValueCardNumLeft,
                                          bottom:0,
                                          fontSize:this.state.bounceValueCardNumFontSize,
                                          top:this.state.bounceValueCardNumTop,
                                        }}>

                                          <Text style={{fontSize:16,color:'#6d6e71'}} allowFontScaling={false}>信用卡号</Text>
                                      </Animated.Text>

                                      <View style={{height:25,width:36,marginTop:30}}>
                                        <Image source={require('../icon/icon_creditcard.png')} style={{height:25,width:36,opacity:0.5}}/>
                                      </View>

                                      <View style={{height:40 ,width:300,marginTop:20,marginLeft:15,justifyContent:'center'}} >
                                            <Text style={{flex:1,fontSize:22,backgroundColor:'rgba(0,0,0,0)',marginTop:7}} allowFontScaling={false}>
                                               {this.state.text}
                                               {this.renderMarker()}
                                            </Text>

                                      </View>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.cardDetails}>
                          <View style={styles.otherInfo}>
                                <View style={styles.title}>
                                    <View style={{flex:1}}>
                                        <Animated.Text style={{
                                          backgroundColor:'white',
                                          position:'absolute',
                                          left:0,
                                          fontSize:this.state.bounceValueDateFontSize,
                                          top:this.state.bounceValueDateTop,
                                        }}>
                                          <Text style={{fontSize:16,color:'#6d6e71'}} allowFontScaling={false}>有效期至</Text>
                                        </Animated.Text>
                                    </View>
                                </View>
                                <TouchableWithoutFeedback onPress={()=>{this._showDateKeyboard()}} >
                                    <View style={styles.input}>
                                          <View style={{flex:0.9, marginTop:10}}>
                                              <Animated.Text style={{
                                                opacity:this.state.opacityExpWord,
                                              }}>
                                                <Text style={{fontSize:25}} allowFontScaling={false}>{this.state.expMonth}/{this.state.expYear}</Text>
                                              </Animated.Text>
                                          </View>
                                          <View style={{flex:0.1,paddingTop:15}}>
                                            <Icon name="question-circle-o" size={18} />
                                          </View>
                                    </View>
                                </TouchableWithoutFeedback>
                          </View>

                          <TouchableWithoutFeedback onPress={()=>{this.showKeyboard("CVV")}} >
                              <View style={styles.otherInfo}>
                                    <View style={styles.title}>
                                        <View style={{flex:1}}>
                                          <Animated.Text style={{
                                            backgroundColor:'white',
                                            position:'absolute',
                                            left:0,
                                            fontSize:this.state.bounceValueCVVFontSize,
                                            top:this.state.bounceValueCVVTop,
                                          }}>
                                            <Text style={{fontSize:16,color:'#6d6e71'}} allowFontScaling={false}>CVV</Text>
                                          </Animated.Text>

                                        </View>

                                    </View>

                                    <View style={styles.input}>
                                      <View style={{flex:0.9, marginTop:10}}>
                                        <Animated.Text style={{
                                          opacity:this.state.opacityCVVWord,
                                        }}>
                                          <View style={{height:40 ,width:100, justifyContent:'center'}} >
                                            <Text style={{flex:1,fontSize:25,backgroundColor:'rgba(0,0,0,0)',marginTop:5}}
                                                        allowFontScaling={false}>

                                              {this.state.cvv}
                                              {this.renderMarker()}
                                              {this._renderPlaceHolder()}
                                            </Text>

                                          </View>
                                        </Animated.Text>
                                      </View>
                                      <View style={{flex:0.1,paddingTop:15}}>
                                        <Icon name="question-circle-o" size={18} />
                                      </View>
                                    </View>
                              </View>
                          </TouchableWithoutFeedback>
                    </View>
                </View>
          </View>
          )

    }
}
const styles = StyleSheet.create({
      container: {
      flex: 1,
      marginTop:65,
      justifyContent: 'center',
      alignItems: 'center',

      },
      infoContainer:{
      flex: 0.3,
      width:deviceWidth,

      },
      cardNo:{
      flex:1,
      paddingTop:30,
      borderBottomWidth:1,
      borderColor:'#d9d9d9',
      marginLeft:20,
      marginRight:20,
      },
      title:{
      flex:0.4,
      flexDirection:'row',
      },
      input:{
      flex:1,//0.6
      flexDirection:'row',
      // backgroundColor:'transparent',
      paddingBottom:10,
      marginBottom:5,
      },
      cardDetails:{
      flex:1,
      paddingTop:20,
      flexDirection:'row',


      },
      otherInfo:{
      flex:0.5,
      borderBottomWidth:1,
      borderColor:'#d9d9d9',
      marginLeft:20,
      marginRight:20,

      },
      modal: {
      height: 300,
      width: deviceWidth,

      },
      modalScroll:{
      flex:1,
      },
      modalContainer:{
      width:deviceWidth,
      height:300,
      },
      modalMonthContainer:{
      flex:0.5,



      },
      modalYearContainer:{
      flex:0.5,
      paddingLeft:10,
      paddingRight:20,

      },
      modalTitle:{
      flex:0.4,
      alignItems:'center',
      justifyContent:'center',

      },

      buttonFont:{
      color:'white',
      fontSize:25
      },
      modalContent:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',

      },
      modalMonthContent:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:20,
      paddingLeft:10,

      },
      modalYearContent:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      paddingLeft:20,
      marginBottom:20,
      borderLeftWidth:1,
      borderColor:'#d9d9d9',
      },
      keyStyle:{
      borderWidth:1,
      borderColor:'#d9d9d9',
      alignItems:'center',
      justifyContent:'center',
      width:deviceWidth/3,
      height:60,

      },
      monthKeyStyle:{

      alignItems:'center',
      justifyContent:'center',
      width:50,
      height:45,


      },
      yearKeyStyle:{

      alignItems:'center',
      justifyContent:'center',

      width:75,
      height:45,

      },
      DateKeyFont:{
      fontSize:20,
      },
      keyFont: {
      fontSize:28,

      },
      submitButton: {
      height:60,
      alignItems:'center',
      justifyContent:'center',

      }




});


AppRegistry.registerComponent('CMKeyBoard', () => CMKeyBoard);
