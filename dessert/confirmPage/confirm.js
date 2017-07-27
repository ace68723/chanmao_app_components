'use strict'

import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box'
import UserActions from '../../src/actions/userActions'
import UserStore from '../../src/stores/userStore'
import CustomerInfo from './customerInfo'
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
export default class Confirm extends Component{
    constructor(props){
      super(props)
      UserActions.getOrderInfo();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
            dataSource: ds.cloneWithRows(UserStore.returnDessert()),
            isFilledInfo: false, //改变用户信息框状态
            isChecked:true,      //改变 checkbox 状态
      };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.upperArea,{flex:this.state.isFilledInfo?0.3:0.2}]}>
                    <TouchableOpacity onPress={()=>this.setState({isFilledInfo:!this.state.isFilledInfo})}>
                        <View style={[styles.clInfo,{height:this.state.isFilledInfo?130:60,}]}>
                            <CustomerInfo isFilledInfo={this.state.isFilledInfo}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.middleArea,{flex:this.state.isFilledInfo?0.4:0.5}]}>
                    <ListView
                       dataSource={this.state.dataSource}
                       renderRow={(rowData) => this._renderRow(rowData)}
                       automaticallyAdjustContentInsets={false}
                     />
                 </View>
                <View style={styles.lowerArea}>
                    <View style={styles.detailsArea}>
                        <View style={styles.detail}>
                            <View style={styles.detailPic}>
                                <Image source={require('./img/icon-fee.png')} style={{width:24.39, height:19.53}}/>
                            </View>
                            <View style={{flex:0.6, justifyContent:'center'}}>
                                <Text style={{fontSize:15}} allowFontScaling={false}>Delivery Fee: $5.99</Text>
                            </View>
                            <View style={{flex:0.3, justifyContent:'center'}}>
                                <Text style={{fontSize:15}} allowFontScaling={false}>Tax: $6.45</Text>
                            </View>
                        </View>
                        <View style={[styles.detail,{borderColor:'#d9d9d9',borderTopWidth:1}]}>
                            <View style={styles.detailPic}>
                                <Image source={require('./img/icon-time.png')} style={{width:19.53, height:19.53}}/>
                            </View>
                            <View style={{flex:0.2, justifyContent:'center'}}>
                                <Text style={{fontSize:15}} allowFontScaling={false}>配送时间：</Text>
                            </View>
                            <View style={{flex:0.7, justifyContent:'center'}}>
                                <Text style={{fontSize:17, paddingLeft:15, color:"#ff7685"}} allowFontScaling={false}>2017-5-20  17:00-18:00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonArea}>
                        <View style={{flex:0.6}}>
                            <View style={{marginTop:95, alignItems:'flex-end'}} >
                                <Text style={{fontSize:18, color:'#ff7685'}} allowFontScaling={false}>Total: $89.59</Text>
                            </View>
                        </View>
                        <View style={{flex:0.4,marginHorizontal:20}}>
                            <View style={styles.policyCheck}>

                                <CheckBox
                                    style={{marginTop:40,flex:0.5, borderColor:'#ff7685'}}
                                    onClick={()=>this.setState({isChecked:!this.state.isChecked})}
                                    isChecked={this.state.isChecked}
                                    rightTextStyle={{fontSize:13,marginLeft:5}}   //default:marginLeft:10
                                    rightText='我同意'
                                    checkBoxColor='#ff7685'
                                />



                                <TouchableOpacity style={{flex:0.5, marginTop:40}}>
                                    <View style={{borderBottomWidth:1.5,paddingTop:5,paddingBottom:3, borderColor:'#ff7685'}}>
                                      <Text style={{color:'#ff7685',fontSize:12}} allowFontScaling={false}>代收相关条例</Text>
                                    </View>
                                </TouchableOpacity>



                            </View>
                            <View style={styles.submit}>
                                <TouchableOpacity>
                                    <View style={styles.submitButtom}>
                                        <Text style={{fontSize:14, fontWeight:'bold', color:'#fff'}} allowFontScaling={false}>提交订单</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    _renderRow(data){
        return(
              <View style={styles.listRow}>
                  <View style={styles.itemPic}>
                      <Image source={data.img} style={{height:70,width:70}}/>
                  </View>
                  <View style={styles.itemInfo}>
                      <View style={{marginTop:20, marginBottom:10}}><Text style={{fontSize:14}} allowFontScaling={false}>{data.item}({data.size}) × {data.quantity}</Text></View>
                      <View style={{ marginBottom:20}}><Text style={{fontSize:14}} allowFontScaling={false}>{data.price}</Text></View>
                  </View>
              </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor: '#fff',

  },
  upperArea:{
      marginBottom:-15
  },
  clInfo: {
      marginTop:75,
      width:deviceWidth-20,

      alignSelf:'center',
      borderColor:"#ff7685",
      borderWidth:1,
      borderStyle:'dashed',

  },
  middleArea:{
      borderBottomWidth:1,
      borderColor:'#d9d9d9',
      marginBottom:-50,
  },
  listRow:{
      marginHorizontal:20,
      borderBottomWidth:1,
      borderColor:'#d9d9d9',
      height:(deviceHeight-75)*0.5/3-20,
      flexDirection:'row',
  },
  itemPic: {
      flex:0.3,
      justifyContent:'center'
  },
  itemInfo:{
      flex:0.7,
  },
  lowerArea: {
    flex:0.3,
  },
  detailsArea: {
    flex:0.4,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#d9d9d9',
  },
  detail: {
    flex:0.5,
    flexDirection:'row',
    backgroundColor:'white'
  },
  detailPic: {
    flex:0.1,
    marginHorizontal:10,
    justifyContent:'center',
  },
  buttonArea: {
    flex:0.6,
    flexDirection:'row'
  },
  policyCheck:{
    flex:0.5,
    alignSelf:'flex-end',
    justifyContent:'center',
    width:150,
    flexDirection:'row'
  },
  checkBox:{
    height:18,
    width:18,
    borderColor:'#ff7685',
    borderWidth:1,
    marginRight:7,


  },
  submit:{
    flex:0.5,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  submitButtom:{
    width:150,
    height:40,
    backgroundColor:'#ff7685',
    alignItems:'center',
    justifyContent:'center'
  }

});
