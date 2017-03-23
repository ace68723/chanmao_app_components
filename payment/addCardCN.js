'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions

} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
export default class addCardCN extends Component {
    constructor(){
      super();
      this.state = {
          isOpen:true,
      }

    }

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={styles.cardNo}>
              <View style={styles.title}><Text style={{fontSize:16,color:'#737373'}} allowFontScaling={false}>卡号</Text></View>
              <View style={styles.input}>
                  <Image source={require('../icon/icon_creditcard.png')} style={{height:25,width:36,marginRight:15,opacity:0.5}}/>
                  <Text style={{fontSize:22}} allowFontScaling={false}>1234 5678 9012 3456</Text>
              </View>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.otherInfo}>
                  <View style={styles.title}><Text style={{fontSize:16,color:'#737373'}} allowFontScaling={false}>有效期至</Text></View>
                  <View style={styles.input}>
                      <Text style={{fontSize:22}} allowFontScaling={false}>10/88</Text>
                  </View>
                </View>
                <View style={styles.otherInfo}>
                  <View style={styles.title}><Text style={{fontSize:16,color:'#737373'}} allowFontScaling={false}>CVV</Text></View>
                  <View style={styles.input}>
                      <Text style={{fontSize:22}} allowFontScaling={false}>123</Text>
                  </View>
                </View>
            </View>
          </View>
          <View style={{flex:0.7}}>
            <TouchableOpacity style={{
              alignItems:'center',
              justifyContent:'center',
              height:50,
              width:100,
              backgroundColor:'#00bfff',
              alignSelf:'flex-end'}} onPress={()=>{this.setState({isOpen:true})}}>
                <Text style={styles.buttonFont} allowFontScaling={false}>提交</Text>
            </TouchableOpacity>
          </View>
          <Modal style={styles.modal} position={"bottom"} backdropOpacity={0.6}  isOpen={this.state.isOpen} backdropPressToClose={false} swipeToClose={false}>

             <View style={styles.modalContainer}>
                 <View style={styles.modalContent}>
                     <View style={styles.modalTitle}>
                     <Text style={styles.textTitle} allowFontScaling={false}>There  s a Payment Issue</Text>
                     </View>
                     <View style={styles.modalText}>
                     <Text style={styles.textContent} allowFontScaling={false}>An erro has occurred while adding this payment method. Please verify its details and try again, or use a different payment method.</Text>
                     </View>
                 </View>
                 <TouchableOpacity style={styles.modalButton} onPress={()=>{this.setState({isOpen:false})}}>
                     <Text style={styles.buttonFont} allowFontScaling={false}>关闭</Text>
                 </TouchableOpacity>
             </View>
         </Modal>
        </View>
      )

    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:65,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

  infoContainer:{
    flex: 0.3,
    width:deviceWidth,


  },
  cardNo:{
    flex:1,
    paddingTop:30,
    borderBottomWidth:1,
    borderColor:'#d9d9d9',
    marginLeft:20,
    marginRight:20,
  },
  title:{
    flex:0.4,
  },
  input:{
    flex:0.6,
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
  },
  cardDetails:{
    flex:1,
    paddingTop:30,
    flexDirection:'row',

  },
  otherInfo:{
    flex:0.5,
    borderBottomWidth:1,
    borderColor:'#d9d9d9',
    marginLeft:20,
    marginRight:20,
  },
  modal: {

    height: 300,
    width: deviceWidth,

  },
  modalContainer:{
    flex:1
  },
  modalTitle:{
    flex:0.4,
    alignItems:'center',
    justifyContent:'center',

  },
  textTitle:{
    color:'black',
    fontSize:29,

  },
  modalText:{
    flex:0.6,
    marginLeft:50,
    marginRight:80
  },
  textContent:{
    color:'black',
    lineHeight:25,
    fontSize:17,

  },
  modalButton:{
    flex:0.2,
    backgroundColor:'#ff8600',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonFont:{
    color:'white',
    fontSize:25
  },
  modalContent:{
    flex:0.8,

  }


});


AppRegistry.registerComponent('addCardCN', () => addCardCN);
