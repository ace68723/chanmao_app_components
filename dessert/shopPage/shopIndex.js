'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Category from './categories'
import TabBar from './tabBar'
const {width, height} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
var navRef;
export default class ShopIndex extends Component{
  constructor(props){
      super(props)
      this.state={
        text:"",
      }
      navRef=props;

  }


  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
                  <View style={styles.returnButton}>
                      <Icon name="angle-left" size={40} style={{marginBottom:8, width:25,color:'grey'}}/>
                  </View>
                  <View style={styles.textInput}>
                       <Icon name="search" size={20} style={{margin:6,width:25,color:'grey'}}/>
                        <TextInput
                            style={{height:32, width:200 }}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        >
                        </TextInput>
                  </View>
                  <View style={styles.boxArea}>
                      <Image source={require('./img/箱子.png')} style={{width:35, height:35}} />
                  </View>
          </View>
          <View style={styles.content}>
          <ScrollableTabView renderTabBar={() => <TabBar />}>
              <Category tabLabel="膨化食品" prop={{category:'puffed'}} allowFontScaling={false} navProp= {navRef}/>
              <Category tabLabel="饼干" prop={{category:'cookies'}} allowFontScaling={false} navProp= {navRef}/>
              <Category tabLabel="坚果" prop={{category:'nuts'}}  allowFontScaling={false} navProp= {navRef}/>
              <Category tabLabel="糖果" prop={{category:'sugars'}}  allowFontScaling={false} navProp= {navRef}/>
              <Category tabLabel="饮料类" prop={{category:'sugars'}}  allowFontScaling={false} navProp= {navRef}/>
          </ScrollableTabView>
          </View>
      </View>
    )
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height:50,
    flex: 0.1,
    flexDirection:'row',
    marginTop:25,
    marginHorizontal:20,
    borderBottomWidth:0.5,
    borderColor:'grey',
  },
  returnButton: {
    flex:0.15,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  textInput: {
    flex:0.7,
    height:35,
    width:500,
    alignSelf:'center',

    borderWidth:1,
    borderRadius:18,
    borderColor:'grey',
    flexDirection:'row',
  },
  boxArea: {
    flex:0.15,
    justifyContent:'center',
    alignItems:'flex-end',

  },
  content: {
     flex:0.9,
  },
  tabBarText: {

    fontSize:14,
    marginTop:15
  },
  tabBarUnderline: {
    backgroundColor:'#e96262',
    height:3,
    alignSelf:'center',


  }
});
