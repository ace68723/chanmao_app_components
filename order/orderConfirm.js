'use strict'

import React, { Component } from 'react';
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
const orderUser = {
    name:"qiao",
    phone: "647-895-0624",
    total: "$150.98",
    address:"Unit 1905,20 Olive Ave, North York, M2N 7G5",
}

export default class orderConfirm extends Component {
  constructor(){
    super();
    this.state = {
       isOpen: false,
       cheakHistory:false,
       pastOrder:false,
       pastOrderCN:false,
    }
  }


  render() {

      if(this.state.cheakHistory == true){
        return(
          <OrderHistory isCheaking={this.state.cheakHistory} />
        )
      }
      if(this.state.pastOrder == true){
        return(
          <PastOrderEN isCheaking={this.state.cheakHistory} />
        )
      }
      if(this.state.pastOrderCN == true){
        return(
          <PastOrderCN isCheaking={this.state.cheakHistory} />
        )
      }

      return(

        <View style={styles.container}>
            <TouchableOpacity  style={styles.button}>

                <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                      onPress={()=>this.setState({isOpen: !this.state.isOpen})} allowFontScaling={false}>
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
                      onPress={()=>this.setState({pastOrder:true})} allowFontScaling={false}>
                    完成订单（英）
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}>

                <Text style={{fontSize:15,fontWeight:'bold', color:'white',textAlign:'center'}}
                      onPress={()=>this.setState({pastOrderCN:true})} allowFontScaling={false}>
                    完成订单（中）
                </Text>
            </TouchableOpacity>
            <CMModal style={styles.modal} position={"center"}  isOpen={this.state.isOpen}>
                <View style={{flex:1}}>
                      <View style={styles.modalHearder}>
                          <Text style={{fontSize:20, fontWeight:'bold'}} allowFontScaling={false}>定制运费</Text>
                      </View>
                      <View style={styles.modalContent}>
                          <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>
                              <Image source={require('../icon/icon_name.png')} style={{width:25,height:25,marginRight:15,marginLeft:15}}/>
                              <Text style={styles.contentFont} allowFontScaling={false}>{orderUser.name}</Text>
                          </View>
                          <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>

                              <Image source={require('../icon/icon_telephone.png')} style={{width:25,height:25,marginRight:15,marginLeft:15}}/>
                              <Text style={styles.contentFont} allowFontScaling={false}>{orderUser.phone}</Text>
                          </View>
                          <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>
                              <Image source={require('../icon/icon_total.png')} style={{width:22,height:25,marginRight:15,marginLeft:15}}/>
                              <Text style={styles.contentFont} allowFontScaling={false}>{orderUser.total}</Text>
                          </View>
                          <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>
                              <Image source={require('../icon/icon_address.png')} style={{width:19,height:25,marginRight:15,marginLeft:15}}/>
                              <Text style={styles.contentFont} allowFontScaling={false}>{orderUser.address}</Text>
                          </View>

                      </View>
                      <View style={styles.modalFooter}>
                          <View style={styles.modalButton}>
                              <TouchableOpacity style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}
                                                onPress={() => this.setState({isOpen: !this.state.isOpen})}>
                                <Text style={styles.buttonFont} allowFontScaling={false}>取消</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.modalButton}>
                              <TouchableOpacity style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}
                                                onPress={() => this.setState({isOpen: !this.state.isOpen})}>
                                <Text style={{fontSize:18,color:"#6394db"}} allowFontScaling={false}>确认</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                </View>
            </CMModal>

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

  modal: {
    justifyContent: 'center',
    height: 350,
    width: 300,

  },
  modalHearder:{
    flex:1,
    justifyContent: 'center',
    alignSelf: 'center',

  },
  modalContent:{
    flex:5,
    marginLeft:20,
    marginRight:20,
    borderTopWidth: 1,
    borderColor: '#a6a6a6',
  },
  contentFont:{
    color:'#ea7b21',
    fontSize:20,

  },
  modalButton:{
    flex:1,

    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,
    borderColor:'#d9d9d9'
  },
  buttonFont:{
    fontSize:18,

  },
  modalFooter:{
    flex:1,


    flexDirection:'row',
  }

});

AppRegistry.registerComponent('orderConfirm', () => orderConfirm);
