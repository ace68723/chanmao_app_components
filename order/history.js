'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,

} from 'react-native';
import Modal from 'react-native-modalbox';

const orderInfo = {
    user:{
      userName:"qiao",
      address:"Unit 1905, 20 Olive Ave, North York, M2N 7G5",
    },
    orderNo: "#107088",
    total: "$150.98",
    orderDate:"2016-10-20",
    orderTime:"13:09:51",
    shop:{
      name:"麻布小馆",
      section:"North York",
    },
    food:[
      {
        order_id:0,
        name:"牛奶鸡蛋布丁",
        price:"$5.99",
      },
      {
        order_id:1,
        name:"牛奶鸡蛋布丁",
        price:"$5.99",
      },
      {
        order_id:2,
        name:"牛奶鸡蛋布丁",
        price:"$5.99",
      }
    ],
    comment:"不要葱花香菜！不要葱花香菜！不要葱花香菜！不要葱花香菜！不要葱花香菜！不要葱花香菜！不要葱花香菜！",
}

export default class orderHistory extends Component {
  constructor(props){
    super(props);
    this.state={
      isCheaking:this.props.isCheaking,
    }
  }
  render() {
      return(
          <View style={styles.container}>
              <Modal style={styles.modal} position={"center"}  isOpen={this.state.isCheaking} swipeToClose={false}>

                          <View style={styles.modalHearder}>
                              <Text style={{fontSize:26, alignSelf:'center',paddingBottom:10,}} allowFontScaling={false}>{orderInfo.orderNo}</Text>
                              <View style={{flexDirection:"row",}}>
                                          <View style={styles.headerLeft}>
                                              <Text style={{fontSize:15}} allowFontScaling={false}>{orderInfo.shop.name}</Text>
                                              <Text style={{fontSize:12}} allowFontScaling={false}>{orderInfo.shop.section}</Text>
                                          </View>
                                          <View style={{flex:1}}></View>
                                          <View style={styles.headerRight}>
                                              <Text style={{fontSize:12}} allowFontScaling={false}>{orderInfo.orderDate}</Text>
                                              <Text style={{fontSize:12}} allowFontScaling={false}>{orderInfo.orderTime}</Text>
                                          </View>
                              </View>
                          </View>
                          <View style={styles.modalInfo}>
                                <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10,justifyContent: 'center',}}>
                                    <Image source={require('../icon/icon_name.png')}
                                           style={{
                                              width:20,
                                              height:20,
                                              marginRight:15,

                                              alignSelf:"center"
                                           }}/>
                                    <Text style={styles.contentFont} allowFontScaling={false}>{orderInfo.user.userName}</Text>
                                </View>

                                <View style={{flexDirection:'row',paddingBottom:10,justifyContent: 'center'}}>
                                    <Image source={require('../icon/icon_address.png')}
                                           style={{
                                              width:19,
                                              height:25,
                                              marginRight:15,

                                              alignSelf:"center"
                                          }}/>
                                    <Text style={styles.contentFont} allowFontScaling={false}>{orderInfo.user.address}</Text>
                                </View>
                          </View>
                          <View style={styles.modalContent}>
                              <ScrollView >
                                  <View >
                                    {this.renderList()}
                                  </View>
                                  <View style={styles.comment}>
                                    <View style={{marginRight:10, marginLeft:10}}>
                                      <Text style={{fontSize:15,lineHeight:16}} allowFontScaling={false}><Text style={{fontWeight:'bold',color:'#ea7b21'}} allowFontScaling={false}>备注：</Text>{orderInfo.comment}</Text>
                                    </View>
                                  </View>
                              </ScrollView>
                          </View>
                          <View style={styles.modalFooter}>
                              <View style={{flex:1,backgroundColor:"yellow"}}></View>
                              <View style={{flex:1,alignSelf: 'flex-end', justifyContent: 'center',}}>

                                  <Text style={{alignSelf: 'flex-end',
                                                color:'black',
                                                fontSize:18,
                                                fontWeight:'bold',
                                                flex:1,
                                                marginTop:15}}
                                        allowFontScaling={false}>
                                          Total: {orderInfo.total}
                                  </Text>
                              </View>
                          </View>

              </Modal>
          </View>

    )
  }
  renderList(){
    return orderInfo.food.map((item,index)=>{
      return(
        <View style={{flex:1,flexDirection:'row',paddingBottom:13}} key={index}>
          <Text style={{fontSize:15,alignSelf:'flex-start'}} allowFontScaling={false}>{item.name}</Text>
          <View style={{flex:1}}></View>
          <Text style={{fontSize:15,alignSelf:'flex-end',color:'#969696',marginRight:10}} allowFontScaling={false}>{item.price}</Text>
        </View>
      )
    })

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  modal: {
    justifyContent: 'center',
    height: 400,
    width: 300,

  },
  modalHearder:{
    flex:2,
    justifyContent: 'center',
    paddingTop:15,
    paddingBottom:10
  },
  headerLeft:{
      flex:1,
      alignSelf:'flex-start',
      marginLeft:20
  },
  headerRight:{
      flex:1,
      alignSelf:'flex-end',
      alignItems:'flex-end',
      marginRight:20,

  },
  modalInfo:{
    flex:2,
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
    marginLeft:20,
    marginRight:20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    paddingBottom:10,
    paddingTop:10
  },
  modalContent:{
    flex:5,
    marginTop:15,
    marginLeft:20,
    marginRight:20,
    paddingBottom:15,
  },
  comment:{
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#f2f2f2',

  },
  contentFont:{
    color:'#ea7b21',
    fontSize:14,
    flex:1
  },

  modalFooter:{
    flex:2,
    alignItems:'center',
    backgroundColor:"white",
    flexDirection:'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
    marginLeft:20,
    marginRight:20,

  }

});

AppRegistry.registerComponent('orderHistory', () => orderHistory );
