'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CardView from './cardView';
import UserActions from '../../src/actions/userActions'
import UserStore from '../../src/stores/userStore'
import InitializeActions from '../../src/actions/initializeActions'
import Icon from 'react-native-vector-icons/FontAwesome'
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
var that;
const xOffset = new Animated.Value(0);
const onScroll = Animated.event([{ nativeEvent: { contentOffset: {x: xOffset} } }],
                { useNativeDriver: true });

const Info = {
    name:"浪味仙",
    subName:"创意花式薯卷",
    flavour:[
      {
        name:"田园蔬菜口味",
        value:0,
        img:'./img/浪味仙01.png'
      },
      {
        name:"韩式泡菜口味",
        value:1,
        img:'./img/浪味仙02.png'
      },
      {
        name:"海苔口味",
        value:2,
        img:'./img/浪味仙03.png'
      },
    ],
    size:[
      {
        name:"大包|84G/克",
        value:"Large",
        price:"$6.99",
      },
      {
        name:"小包|42G/克",
        value:"Small",
        price:"$4.99",
      },
    ],
}

export default class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      flavour: Info.flavour[0].name,
      quantity:1,
      size:"Large",
      price:"$6.99",
      scrollX:0,
      move:false,
      index:0,
      pic1LeftRange:new Animated.Value(70),
      leftRange: new Animated.Value(-20),
    }
    that = this;
  }
  componentWillMount(){
      InitializeActions.initApp();
  }
  changeFocusFlavour(flavourIndex){
    console.log(flavourIndex)
      this.setState({
          flavour: Info.flavour[flavourIndex].name,
          index:flavourIndex
      })
  }
  _renderItemPic(){
    return (
      <View style={styles.ItemPic}>
          <CardView Info={this.state} ref='CardView' change={(index)=>this.changeFocusFlavour(index)}  />
      </View>
    );
  }
  _renderFlavourList(){
    return Info.flavour.map((flavour,index)=>{
      return(
        <TouchableWithoutFeedback key={index} onPress={()=>{
          if(this.state.move == false){
            this._onPressFlavour(flavour.name,index)
            }
        }}>
          <View style={[styles.opt,{borderColor:(flavour.name==this.state.flavour?'#e96262':'#8d8f92')}]}>
              <Text style={{fontSize:12,paddingHorizontal:10}} allowFontScaling={false}>{flavour.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      )
    })
  }
  _renderSizeList(){
    return Info.size.map((size,index)=>{
      return(
        <TouchableWithoutFeedback key={index} onPress={()=>{this._onPressSize(size)}}>
            <View key={index} style={[styles.opt,{borderColor:(size.value==this.state.size?'#e96262':'#8d8f92')}]}>
                <Text style={{fontSize:12,paddingHorizontal:10}} allowFontScaling={false}>{size.name}</Text>
            </View>
        </TouchableWithoutFeedback>
      )
    })
  }

  _onPressFlavour(choice,index){
          this.setState({
            flavour:choice,
            scrollX:deviceWidth*index,
            move:true
          },()=>{
            // this.refs._ScrollPic.scrollTo({x: this.state.scrollX, y: 0, animated: true});
            this.refs.CardView.moveCard(index);
            //return this.state.choice

          })
          setTimeout(()=>this.setState({
            move:false,
          }),100)

  }
  _onPressSize(item){
    this.setState({
      size:item.value,
      price: item.price})
  }
  _addItem(){
      UserActions.addDessert({
          flavour:this.state.flavour,
          quantity:this.state.quantity,
          size:this.state.size,
        });
      console.log(UserStore.returnDessert())
  }
  render() {
      return(
            <View style={styles.container}>
                  <ScrollView>
                    {this._renderItemPic()}
                    <View style={styles.ItemInfo}>
                          <View style={styles.ItemTitle}>
                              <View style={styles.ItemName}><Text allowFontScaling={false} style={{alignSelf:'center',fontWeight:'bold',fontSize:18}}>{Info.name} | {Info.subName}</Text></View>
                              <View style={{paddingBottom:10,}}><Text style={{alignSelf:'center',fontWeight:'bold',fontSize:12, color:'grey'}}>{this.state.flavour}</Text></View>
                              <View style={{paddingBottom:10,}}><Text style={{alignSelf:'center',fontSize:14, color:'tomato'}}>{this.state.price}</Text></View>
                          </View>
                          <View style={styles.options}>
                              <View style={{paddingBottom:25,flexDirection:'row'}}>
                              <View style={{justifyContent:'center'}}><Text allowFontScaling={false} style={{color:'#6d6e71',marginRight:10}}>口味</Text></View>
                                <ScrollView horizontal={true}>
                                  {this._renderFlavourList()}
                                </ScrollView>
                              </View>
                              <View style={{paddingBottom:25,flexDirection:'row'}}>
                              <View style={{justifyContent:'center'}}><Text allowFontScaling={false} style={{color:'#6d6e71',marginRight:10}}>大小</Text></View>
                                    <ScrollView horizontal={true}>
                                      {this._renderSizeList()}
                                    </ScrollView>
                              </View>
                              <View style={{paddingBottom:25,flexDirection:'row'}}>
                              <View style={{justifyContent:'center'}}><Text allowFontScaling={false} style={{color:'#6d6e71',marginRight:10}}>数量</Text></View>
                                <View style={{flexDirection:'row',width:100,alignItems:'center'}}>
                                    <TouchableWithoutFeedback onPress={()=>{
                                        if(this.state.quantity>1){
                                            this.setState({
                                              quantity:this.state.quantity-1,
                                            })
                                         }
                                    }}>
                                          <View style={{flex:0.2,borderTopWidth:1,borderLeftWidth:1,borderBottomWidth:1,borderColor:'#8d8f92'}}><Text allowFontScaling={false} style={{alignSelf:'center'}}> - </Text></View>
                                    </TouchableWithoutFeedback>
                                    <View style={{flex:0.6,borderWidth:1,borderColor:'#8d8f92'}}><Text allowFontScaling={false} style={{alignSelf:'center'}}> {this.state.quantity} </Text></View>
                                    <TouchableWithoutFeedback onPress={()=>{
                                        this.setState({
                                          quantity:this.state.quantity+1,
                                        })
                                    }}>
                                        <View style={{flex:0.2,borderTopWidth:1,borderRightWidth:1,borderBottomWidth:1,borderColor:'#8d8f92'}}><Text allowFontScaling={false} style={{alignSelf:'center'}}> + </Text></View>
                                    </TouchableWithoutFeedback>
                                </View>
                              </View>
                          </View>
                          <View style={styles.buttonView}>
                              <TouchableWithoutFeedback onPress={()=>this._addItem()} style={styles.submit}>
                                  <View  style={{height:50,width:150,backgroundColor:'tomato',justifyContent:'center'}}><Text  allowFontScaling={false} style={{alignSelf:'center',color:'white',fontSize:18,fontWeight:'bold'}}>加入购物箱</Text></View>
                              </TouchableWithoutFeedback>
                          </View>
                    </View>


                    <View style={styles.ItemDetail}>
                          <ScrollableTabView tabBarTextStyle={{color:'#e96262',fontSize:16,marginTop:15}}  tabBarUnderlineStyle={{backgroundColor:'#e96262',height:2,width:deviceWidth/4,marginHorizontal:deviceWidth/8}}>
                            <View tabLabel="服务明细" style={{marginTop:20}}>
                              <Image  style={{width:360,height:220, alignSelf:'center'}}
                                      resizeMode='contain' source={require('./img/服务明细.png')}/>
                            </View>
                            <View tabLabel="产品详情" style={{marginTop:20}}>
                              <Image style={{width:380, height: 220, alignSelf:'center'}}
                                     resizeMode='contain' source={require('./img/产品详情.png')}/>
                            </View>
                          </ScrollableTabView>
                    </View>
                  </ScrollView>
                  <View style={styles.header}>
                    <Image style={{width:deviceWidth,height:deviceWidth/5}} source={require('./img/半透明header.png')}/>
                    <TouchableWithoutFeedback onPress={()=> this.props.navigator.pop()}>
                        <View style={{position:'absolute', top:20, left:20, backgroundColor:'transparent'}}>
                              <Icon name="angle-left" size={40}  style={{color:'grey'}}/>
                        </View>
                    </TouchableWithoutFeedback>
                  </View>
            </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#efefef',

  },
  header:{
    position:'absolute',
    alignSelf:'flex-start',
    width:deviceWidth,
    height:deviceWidth/5
  },
  ItemPic:{
    height:280,
    width:deviceWidth,
  },
  ItemInfo:{
    height:360,
    backgroundColor:'white',
  },
  ItemDetail:{
    backgroundColor:'white',
    height:600,
    width:deviceWidth,
    marginTop:10,
  },
  ItemTitle:{

    flex:0.3,
  },
  ItemName:{
    justifyContent:'center',
    alignSelf:'center',
    height:50,
    width:200,



  },

  options:{
    flex:0.4,
    paddingHorizontal:20,
    paddingTop:10,

  },
  opt:{
    alignItems:'center',
    marginRight:10,
    paddingVertical:5,
    borderWidth:1,

  },
  optionTitle:{

  },
  buttonView: {
    alignItems:'center',
    marginBottom:30
  },
  submit:{
    flex:0.3,

    justifyContent:'center',
    alignItems:'center'
  }


});
