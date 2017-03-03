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
    }
  }


  render() {
    console.log(this.state)

    if(this.state.isOpen == true){

      return(
        <View style={styles.container}>
          <CMModal style={styles.modal} position={"center"} ref={"modal3"} isOpen={this.state.isOpen}>
              <View style={{flex:1}}>
                    <View style={styles.modalHearder}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>定制运费</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>
                            <Image source={require('../icon/icon_name.png')} style={{width:25,height:25,marginRight:15,marginLeft:15}}/>
                            <Text style={styles.contentFont}>{orderUser.name}</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>

                            <Image source={require('../icon/icon_telephone.png')} style={{width:25,height:25,marginRight:15,marginLeft:15}}/>
                            <Text style={styles.contentFont}>{orderUser.phone}</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>
                            <Image source={require('../icon/icon_total.png')} style={{width:22,height:25,marginRight:15,marginLeft:15}}/>
                            <Text style={styles.contentFont}>{orderUser.total}</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:20,alignItems: 'center',}}>
                            <Image source={require('../icon/icon_address.png')} style={{width:19,height:25,marginRight:15,marginLeft:15}}/>
                            <Text style={styles.contentFont}>{orderUser.address}</Text>
                        </View>

                    </View>
                    <View style={styles.modalFooter}>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={{flex:1,
                                                      justifyContent:'center',
                                                      alignItems:'center'}}
                                              onPress={() => this.setState({isOpen: !this.state.isOpen})}>
                              <Text style={styles.buttonFont}>取消</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={{flex:1,
                                                      justifyContent:'center',
                                                      alignItems:'center'}}
                                              onPress={() => this.setState({isOpen: !this.state.isOpen})}>
                              <Text style={{fontSize:18,color:"#6394db"}}>确认</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
              </View>
          </CMModal>
         </View>
      )
    }
    return (
        <View style={styles.container}>
          <TouchableOpacity  style={styles.button}>
              <Text style={{fontSize:20,fontWeight:'bold', color:'white',textAlign:'center'}}
                    onPress={()=>this.setState({isOpen: !this.state.isOpen})}>
                  修改
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
