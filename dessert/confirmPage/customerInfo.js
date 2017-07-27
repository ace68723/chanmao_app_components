'use strict'

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import UserActions from '../../src/actions/userActions'
import UserStore from '../../src/stores/userStore'
import Icon from 'react-native-vector-icons/FontAwesome'
let customer ={};
export default class CustomerInfo extends Component{
    constructor(props){
        super(props)
        UserActions.getCustomerInfo();
        customer = UserStore.returnCustomer();
        


    }
    render(){
      if(this.props.isFilledInfo){
          return(
              <View style={[styles.container,{marginRight:70}]}>
                  <View style={{flex:0.25, flexDirection:'row'}}>
                      <View style={[styles.infoPics,{paddingTop:10}]}>
                          <Image style={{height:26.1,width:23.1}} source={require('./img/name-01.png')} />
                      </View>
                  <View style={[styles.infoDetails,{paddingTop:13}]}>
                          <Text>{customer.name}</Text>
                      </View>
                  </View>
                  <View style={{flex:0.25, flexDirection:'row'}}>
                      <View style={[styles.infoPics,{paddingTop:8}]}>
                          <Image style={{height:26.1,width:23.1}} source={require('./img/phone-01.png')} />
                      </View>
                      <View style={[styles.infoDetails,{paddingTop:11}]}>
                          <Text>{customer.phone}</Text>
                      </View>
                  </View>
                  <View style={{flex:0.5, flexDirection:'row'}}>
                      <View style={[styles.infoPics,{paddingTop:10}]}>
                          <Image style={{height:26.1,width:23.1}} source={require('./img/address-01.png')} />
                      </View>
                      <View style={[styles.infoDetails,{paddingTop:13}]}>
                          <Text>{customer.address}</Text>
                      </View>
                  </View>
              </View>
          )
      }else{
          return(
              <View style={[styles.container,{flexDirection:'row',}]}>
                  <View style={styles.noInfoPic}>
                      <Image style={{
                                height:40,
                                width:40,}}
                            source={require('./img/setting-icon/setting-location.png')}/>
                  </View>
                  <View style={styles.noInfoProms}>
                        <Text style={{fontSize:16}}>请输入您的配送地址</Text>
                  </View>
                  <View style={styles.noInfoArrow}>
                      <Image style={{
                                height:18.6,
                                width:11.4,}}
                            source={require('./img/pink-icon-forward.png')}/>
                  </View>

              </View>
          )
      }
    }
}


const styles = StyleSheet.create({
  container:{
     flex:1,

  },
  noInfoPic:{
    flex:0.1,
    marginHorizontal:15,
    justifyContent:'center',
    alignItems:'center'
  },
  noInfoProms:{
    flex:0.8,
    justifyContent:'center',
  },
  noInfoArrow:{
    flex:0.1,
    alignItems:'center',
    justifyContent:'center',
    marginRight:8,
  },
  infoPics:{
    flex:0.1,
    marginHorizontal:20,
    alignItems:'center',

  },
  infoDetails:{
    flex:0.9,

  }



});
