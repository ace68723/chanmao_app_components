'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  NavigatorIOS,

} from 'react-native';
import CMModal from 'react-native-modalbox';
import AddPaymentEN from './addPaymentEN';
import AddPaymentCN from './addPaymentCN';
import AddCardEN from './addCardEN';
import AddCardCN from './addCardCN';
export default class payIndex extends Component {
    constructor(props){
      super(props);
      this.onPressADD = this.onPressADD.bind(this);
    }
    onPressADD(){
      this.props.navigator.push({
          component:AddPaymentEN,
          title: 'ADD PAYMENT',
      })
    }
    onPressADDCN(){
      this.props.navigator.push({
          component:AddPaymentCN,
          title: '添加支付',
      })
    }
    onPressAddCard(){
      this.props.navigator.push({
          component:AddCardEN,
          title: 'ADD CARD',
      })
    }
    onPressAddCardCN(){
      this.props.navigator.push({
          component:AddCardCN,
          title: '添加卡信息',
      })
    }
    render(){
      // if(this.state.cheakHistory == true){
      //   return(
      //     <OrderHistory isCheaking={this.state.cheakHistory} />
      //   )
      // }

      return(
        <View style={styles.container}>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.onPressADD()} allowFontScaling={false}>
                      Add Payment
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.onPressAddCard()} allowFontScaling={false}>
                      Add Card
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.onPressADDCN()} allowFontScaling={false}>
                      添加支付
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.onPressAddCardCN()} allowFontScaling={false}>
                      添加支付卡信息
                  </Text>
              </TouchableOpacity>

        </View>
      )
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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
  button:{
    justifyContent:'center',
    backgroundColor:'#ff8600',
    height:50,
    width:200,
    padding:10,
    marginTop:10,
  },

  contentFont:{
    color:'#ea7b21',
    fontSize:20,

  },
  buttonFont:{
    fontSize:18,

  },
  modalFooter:{
    flex:1,


    flexDirection:'row',
  }

});


AppRegistry.registerComponent('payIndex', () => payIndex);
