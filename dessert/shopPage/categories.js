'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  NavigatorIOS,
} from 'react-native';
import ItemPage from '../itemPage/item'
const {width, height} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
let navRef ={};
export default class Category extends Component{
      constructor(props){
          super(props)
          this.state={
            itemName:"浪味仙-蔬菜口味"
          }
          navRef = props.navProp;
      }
      render(){
          return(
              <View style={styles.container}>
                  <ScrollView directionalLockEnabled={true}>
                      <View style={{width:deviceWidth}}>
                          <View style={styles.categoryContent}>
                              {this._renderItem()}

                          </View>
                      </View>
                  </ScrollView>
              </View>
          )
      }
      _renderItem(){
            var allItems = [];
            for(var i = 0; i < 6; i++){
                const value = i;
                allItems.push(
                    <TouchableWithoutFeedback key={i} onPress={()=>this.navtoItemPage()}>
                          <View style={styles.item}>
                                <View style={styles.imageView}>
                                    <Image source={require('./img/浪味仙01.png')}
                                            style={styles.img}/>
                                </View>
                                <View style={styles.infoView}>
                                    <View style={{flex:0.5}}>
                                        <Text style={{fontSize:13, fontWeight:'bold'}} allowFontScaling={false}>{this.state.itemName}</Text>
                                    </View>
                                    <View style={{flex:0.5, marginBottom:5, flexDirection:'row', justifyContent:'center'}}>
                                          <Text style={{color:"#ff7681"}} allowFontScaling={false}>$4.99</Text>
                                          <View style={styles.quantity}>
                                              <Text style={{color:"white", fontSize:10, fontWeight:'bold'}} allowFontScaling={false}>6</Text>
                                          </View>
                                    </View>
                                </View>
                          </View>
                    </TouchableWithoutFeedback>
              )
          }
          return allItems;
      }
      navtoItemPage(){
        navRef.navigator.push({
          component:ItemPage,
          navigationBarHidden: true
        })
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  categoryContent:{
    width:deviceWidth,
    flexWrap:'wrap',
    flexDirection:'row',
    paddingHorizontal:30,

  },
  item: {
    height:220,
    width:(deviceWidth/2)-30,
    marginBottom:10,
    alignItems:'center'

  },
  imageView:{
    width:135,
    height:160,
    flex:0.8,
    alignItems:'center',


  },
  img: {
    width:130,
    height:160,
  },
  infoView: {
    flex:0.2,
    width:135,
    marginTop:5,
    alignItems:'flex-start'
  },
  quantity: {
    width:15,
    height:15,
    backgroundColor:"#ff7681",
    marginLeft:80,
    justifyContent:'center',
    alignItems:'center'
  }

});
