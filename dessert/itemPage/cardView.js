'use strict'

import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Item from './item';
import UserStore from '../../src/stores/userStore';
import UserActions from '../../src/actions/userActions';
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;

const xOffset = new Animated.Value(0);
const onScroll = Animated.event([{ nativeEvent: { contentOffset: {x: xOffset} } }],
                { useNativeDriver: true });
var that;
const Info = {
    name:"浪味仙",
    subName:"创意花式薯卷",
    flavour:[
      {
        name:"田园蔬菜口味",
        value:0,
        img:require('./img/浪味仙01.png')
      },
      {
        name:"韩式泡菜口味",
        value:1,
        img:require('./img/浪味仙02.png')
      },
      {
        name:"海苔口味",
        value:2,
        img:require('./img/浪味仙03.png')
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

    function rotateTransform(index){
      return {
        transform: [{
          translateX: xOffset.interpolate({
            inputRange: [(index - 1) * deviceWidth, index * deviceWidth, (index + 1) * deviceWidth],
            outputRange: [-0.5*deviceWidth, 0, 0.5*deviceWidth],
          })
        }]
      };
    }


    export default class Scroll extends Component{
      constructor(props){
          super(props);
          this.state = this.props.Info
          that = this;
      }
      renderCards(){
        return Info.flavour.map((item,index)=>{
            return(
                <this.Page key={index}>
                     <this.Card index={index}>
                         <Image style={{width:270, height:270}} source={item.img}/>
                     </this.Card>
               </this.Page>
            )
        })
      }
      render(){
        return(
          <this.CardView change={this.props}>
              {this.renderCards()}
          </this.CardView>
        );
      }
      CardView(props: { children?: ReactElement<*> }){
          return(
            <View style={{flex:1}}>
                <Animated.ScrollView horizontal={true}
                        snapToInterval={deviceWidth}
                        snapToAlignment={'start'}
                        ref={(ref)=>that.cardRef = ref}
                        decelerationRate={0}
                        pagingEnabled
                        scrollEventThrottle={16}
                        onScroll={onScroll}
                        onMomentumScrollEnd={(event)=>{
                          let index = event.nativeEvent.contentOffset.x/deviceWidth;
                          props.change.change(index)
                        }}//onScrollAnimationEnd cannot support horizontal ScrollView
                        style={{flexDirection: 'row',backgroundColor:'white'}}>
                        {props.children}
                  </Animated.ScrollView>
            </View>
          )
      }
      Page(props){
          return(
            <View style={styles.page} index={props.children.props.index}>
                {props.children}
            </View>
          )
      }
      Card(props) {
            return (
              <Animated.View style={[styles.card, rotateTransform(props.index)]}>
                {props.children}
              </Animated.View>
            );
      }
      moveCard(index){
        let distance = index*deviceWidth;
        that.cardRef._component.scrollTo({x:distance})
      }

    }
const styles = StyleSheet.create({
    page:{
        width: deviceWidth,
        paddingHorizontal:20

    },
    card:{
       height:280,
       justifyContent: 'center',
       alignItems:'center',

    }

});
