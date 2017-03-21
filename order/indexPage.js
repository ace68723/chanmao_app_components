'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image

} from 'react-native';
import CMModal from 'react-native-modalbox';
import OrderHistory from './history';
import PastOrderEN from './pastOrderEN';
import PastOrderCN from './pastOrderCN';
import Icon from 'react-native-vector-icons';
import OrderConfirm from './orderConfirm';
export default class indexPage extends Component {
    constructor(){
      super();
      this.state = {
         orderConfirm: false,
         cheakHistory:false,
         pastOrderEN:false,
         pastOrderCN:false,
      }
    }

    render(){
      if(this.state.cheakHistory == true){
        return(
          <OrderHistory isCheaking={this.state.cheakHistory} />
        )
      }
      if(this.state.pastOrderEN == true){
        return(
          <PastOrderEN isCheaking={this.state.pastOrderEN} />
        )
      }
      if(this.state.pastOrderCN == true){
        return(
          <PastOrderCN isCheaking={this.state.pastOrderCN} />
        )
      }
      if(this.state.orderConfirm== true){
        return(
          <OrderConfirm isCheaking={this.state.orderConfirm} />
        )
      }
      return(
        <View style={styles.container}>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.setState({orderConfirm: true})} allowFontScaling={false}>
                      修改
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button}>
                  <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                       onPress={()=>this.setState({cheakHistory: true})} allowFontScaling={false}>
                      查看
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:15,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.setState({pastOrderEN:true})} allowFontScaling={false}>
                      完成订单（英）
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button}>

                  <Text style={{fontSize:15,fontWeight:'bold', color:'white',textAlign:'center'}}
                        onPress={()=>this.setState({pastOrderCN:true})} allowFontScaling={false}>
                      完成订单（中）
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
    width:100,
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


AppRegistry.registerComponent('indexPage', () => indexPage);
