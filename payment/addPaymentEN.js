'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,


} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class addPaymentEN extends Component {
    constructor(){
      super();

    }

    render(){
      return(
        <View style={styles.container}>
            <View style={styles.optContainer}>
                <View style={styles.option}>
                  <View style={styles.icon}>
                    <Image source={require('../icon/icon_creditcard.png')} style={{height:25,width:36,}}/>
                  </View>
                  <Text style={styles.optionFont}>Credit Card</Text>
                  <Icon name="chevron-right" size={20} style={styles.arrow}/>
                </View>
                <View style={styles.option}>
                  <View style={styles.icon}>
                    <Image source={require('../icon/icon_debit.png')} style={{height:25,width:36,}}/>
                  </View>
                  <Text style={styles.optionFont}>Debit Card</Text>
                  <Icon name="chevron-right" size={20} style={styles.arrow}/>
                </View>
                <View style={styles.option}>
                  <View style={styles.icon}>
                    <Image source={require('../icon/icon_cash.png')} style={{height:25,width:41}}/>
                  </View>
                  <Text style={styles.optionFont}>Cash</Text>
                  <Icon name="chevron-right" size={20} style={styles.arrow}/>
                </View>
            </View>
            <View style={{flex:0.7}}></View>
        </View>
      )
    }
  }
const styles = StyleSheet.create({
  container: {
    marginTop:65,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  optContainer: {
    flex:0.3,
    // width:deviceWidth,
    // marginBottom:deviceHeight-310,
    alignItems:'center',
    alignSelf:'flex-start',

  },
  option: {
    flex:1,
    borderBottomWidth:1,
    marginLeft:20,
    marginRight:20,
    borderColor:'#d9d9d9',
    flexDirection: 'row',
    // alignItems:'center',
    paddingTop:25,
  },
  icon:{
    flex:0.1,
  },
  optionFont:{
    flex:0.8,
    fontSize:17,
    paddingTop:2,
    marginLeft:20,
  },
  arrow: {
      flex:0.1,
      paddingTop:3,
      textAlign:'right',
  }

});


AppRegistry.registerComponent('addPaymentEN', () => addPaymentEN);
