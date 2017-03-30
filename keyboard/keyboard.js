'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,

} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;

var cols = 3;
const years = [2016,2017,2018,2019,2020,2021,2022,2023];
var that;
export default class CMKeyBoard extends Component {
    constructor(){
      super();
      that=this;

      this.state = {
          isOpen:false,
          isDateOpen:false,
          isCVVOpen:false,
          text:"",
          keyboardType:"monthYear",
          expMonth:"MM",
          expYear:"YYYY",
          cvv:"",
          fontColor:'#000',
          submitButtonColor:'#d9d9d9',

          InputSelected:false,

          opacityExpWord:new Animated.Value(0),
          opacityCVVWord:new Animated.Value(0),

          bounceValueCardNumTop: new Animated.Value(0.05*height),
          bounceValueCardNumLeft: new Animated.Value(50),
          bounceValueCardNumFontSize: new Animated.Value(20),
          bounceValueDateTop: new Animated.Value(0.05*height),
          bounceValueDateFontSize: new Animated.Value(20),

          bounceValueCVVTop: new Animated.Value(0.05*height),
          bounceValueCVVFontSize: new Animated.Value(20),


        }


    }
    _renderMarker()
    {
      if (this.state.InputSelected){
          return( <Animated.Text style={{
                    flex:1,fontSize:22,
                    opacity:this.state.bounceValueMarker,
                  }}>
                    |
                  </Animated.Text>
          )}
    }
    _showKeyboard(type){

        this._BlurDateKeyboard();
        if(type == "cardNum"){

          if(this.refs._ScrollView){
              this.refs._ScrollView.scrollTo({x: 0, y: 0, animated: true});
          }
          this.setState({isOpen:true,isDateOpen:false,isCVVOpen:false});
          this._BlurCVV();
          Animated.parallel([
            Animated.timing(
            this.state.bounceValueCardNumTop,
            {
              toValue: 0,
              friction: 1,
              duration:300
            }),
            Animated.timing(
            this.state.bounceValueCardNumLeft,
            {
              toValue: 0,
              friction: 1,
              duration:300
            }),
            Animated.timing(
            this.state.bounceValueCardNumFontSize,
            {
              toValue: 15,
              friction: 1,
              duration:300
            }),
          ]).start();

          //this._ScrollView.scrollTo({x: 0, y: 0, animated: true});
        }else{

          this.setState({isOpen:false,isDateOpen:false,isCVVOpen:true});
          this._BlurCardNumber();
          if(this.refs._ScrollView){
              this.refs._ScrollView.scrollTo({x: 0, y: 0, animated: true});
          }
          Animated.parallel([
            Animated.timing(
            this.state.bounceValueCVVTop,
            {
              toValue: 0,
              friction: 1,
              duration:300
            }),
            Animated.timing(
            this.state.bounceValueCVVFontSize,
            {
              toValue: 15,
              friction: 1,
              duration:300
            }),
            Animated.timing(
            this.state.opacityCVVWord,
            {
              toValue: 1,
              friction: 1,
              duration:300
            }),
          ]).start();
        }

    }
    _BlurCardNumber() {

      this.setState({isOpen:false});
      if(this.state.text ==""){
            Animated.parallel([
              Animated.timing(
              this.state.bounceValueCardNumTop,
              {
                toValue: 0.05*height,
                friction: 1,
                duration:300
              }),
              Animated.timing(
              this.state.bounceValueCardNumLeft,
              {
                toValue: 50,
                friction: 1,
                duration:300
              }),
              Animated.timing(
              this.state.bounceValueCardNumFontSize,
              {
                toValue: 20,
                friction: 1,
                duration:300
              }),
            ]).start();
      }
    }
    _showDateKeyboard(){
        this.setState({isOpen:false,isDateOpen:true,isCVVOpen:false});
        this._BlurCVV();
        this._BlurCardNumber();
        setTimeout( ()=> {
          if(this.refs._ScrollView){
              this.refs._ScrollView.scrollToEnd({animated: true});
          }
        }, 300);

        Animated.parallel([
          Animated.timing(
          this.state.bounceValueDateTop,
          {
            toValue: 0,
            friction: 1,
            duration:300,

          }),
          Animated.timing(
          this.state.bounceValueDateFontSize,
          {
            toValue: 15,
            friction: 1,
            duration:300
          }),
          Animated.timing(
          this.state.opacityExpWord,
          {
            toValue: 1,
            friction: 1,
            duration:300
          }),

        ]).start();
    }
    _BlurDateKeyboard(){

      this.setState({isDateOpen:false});
      if(this.state.expMonth =="MM" && this.state.expYear =="YYYY"){
            Animated.parallel([
              Animated.timing(
              this.state.bounceValueDateTop,
              {
                toValue: 0.05*height,
                friction: 1,
                duration:300
              }),
              Animated.timing(
              this.state.bounceValueDateFontSize,
              {
                toValue: 20,
                friction: 1,
                duration:300
              }),
              Animated.timing(
              this.state.opacityExpWord,
              {
                toValue: 0,
                friction: 1,
                duration:300
              }),
            ]).start();
      }
    }

    _BlurCVV(){
      this.setState({isCVVOpen:false});
      if(this.state.cvv == ""){
          Animated.parallel([
            Animated.timing(
            this.state.bounceValueCVVTop,
            {
              toValue: 0.05*height,
              friction: 1,
              duration:300
            }),
            Animated.timing(
            this.state.bounceValueCVVFontSize,
            {
              toValue: 20,
              friction: 1,
              duration:300
            }),
            Animated.timing(
            this.state.opacityCVVWord,
            {
              toValue: 0,
              friction: 1,
              duration:300
            }),
          ]).start();
      }
    }
    _onPressKey(input){

      if(this.state.text.length < 19){

          if(this.state.text.length == 4 || this.state.text.length == 9 || this.state.text.length == 14){
              var n = input.toString();
              this.setState({text:this.state.text+ " " + n});

            }else{
              var n = input.toString();
              this.setState({text:this.state.text+n},()=>{that._valid()});

            }

      }

    }
    _onPressMonth(input){

      if(input<10){
        var month = "0" + input.toString();
      }else{
        var month = input.toString();
      }
      this.setState({expMonth:month},()=>{that._valid()});

    }
    _onPressYear(input){

      var year =  input.toString();
      this.setState({expYear:year},()=>{that._valid()});

    }
    _onPressCVV(input){

      if(this.state.cvv.length < 3){

        var inputCVV = input.toString();
        this.setState({cvv:this.state.cvv+inputCVV},()=>{that._valid()});

      }


    }
    _onPressDelete(){
      if(this.state.text.length > 0){
        if(this.state.text.charAt(this.state.text.length-1) == " "){
          let newStr = this.state.text.substring(0, this.state.text.length-2);
          this.setState({text:newStr,submitButtonColor:'#d9d9d9'});
        }else{
          let newStr = this.state.text.substring(0, this.state.text.length-1);
          this.setState({text:newStr,submitButtonColor:'#d9d9d9'});
        }
      }else{
        this.setState({isOpen:false,submitButtonColor:'#d9d9d9'});
        {this._BlurCardNumber()};
      }
    }
    _onPressCVVDel(){
      if(this.state.cvv.length > 0){
        let newStr = this.state.cvv.substring(0, this.state.cvv.length-1);
        this.setState({cvv:newStr,submitButtonColor:'#d9d9d9'});
      }else{
        this.setState({isCVVOpen:false,submitButtonColor:'#d9d9d9'});
        {this._BlurCVV()};
      }
    }
    _renderKeys(typingCVV){

      var allKeys=[];
      for(var i = 0; i < 9; i++){
        const value = i+1;
        allKeys.push(
            <TouchableHighlight key={i} style={styles.keyStyle} underlayColor="#f2f2f2" onPress={()=>{typingCVV?this._onPressCVV(value):this._onPressKey(value)}}>


              <Text style={styles.keyFont}>{i+1}</Text>


            </TouchableHighlight>
        );
      }
      allKeys.push(
        <View key={i} style={styles.keyStyle}>

        </View>

      );
      allKeys.push(
        <TouchableHighlight key={10} style={styles.keyStyle} underlayColor="#f2f2f2" onPress={()=>{typingCVV?this._onPressCVV(0):this._onPressKey(0)}}>
          <Text style={styles.keyFont}>0</Text>
        </TouchableHighlight>
      );
      allKeys.push(
        <TouchableHighlight key={11} style={styles.keyStyle} underlayColor="#f2f2f2" onPress={()=>{typingCVV?this._onPressCVVDel():this._onPressDelete()}}>
              <Image source={require('../icon/icon_delete.png')} style={{height:20,width:27}}/>
        </TouchableHighlight>

      );
      return allKeys;
    }
    _renderMonthKeys(){
      var allKeys=[];
      for(var i = 0; i < 12; i++){
              const value = i+1;
              if(i<9){
                  allKeys.push(
                      <TouchableHighlight key={i}
                                          style={styles.monthKeyStyle}
                                          underlayColor='transparent'
                                          onPress={()=>{this._onPressMonth(value)}}
                                          onShowUnderlay={()=>this.setState({fontColor:'#ea7b21'})}
                                          onHideUnderlay={()=>this.setState({fontColor:'#000'})}>


                        <Text style={[styles.DateKeyFont,{color:this.state.fontColor}]} allowFontScaling={false}>0{i+1}</Text>


                      </TouchableHighlight>
                  );
             }else{
               allKeys.push(
                   <TouchableOpacity key={i} style={styles.monthKeyStyle} onPress={()=>{this._onPressMonth(value)}}>


                     <Text style={styles.DateKeyFont} allowFontScaling={false}>{i+1}</Text>


                   </TouchableOpacity>
                 );
             }
           }

      return allKeys;
    }
    _renderYearKeys(){
      var allKeys=[];
      years.map((year,i)=>{
              const value = year;

              allKeys.push(
                  <TouchableOpacity key={i} style={styles.yearKeyStyle} onPress={()=>{this._onPressYear(value)}}>


                    <Text style={styles.DateKeyFont} allowFontScaling={false}>{year}</Text>


                  </TouchableOpacity>
              );

           })


      return allKeys;
    }
    _valid(){
      if(this.state.text.length == 19 && this.state.cvv.length == 3 && this.state.expYear != "YYYY" && this.state.expMonth !="MM"){
        this.setState({submitButtonColor:'#ea7b21'})
      }
    }
    render(){
        return(
          <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={styles.cardNo}>

              <TouchableWithoutFeedback onPress={()=>{this._showKeyboard("cardNum")}} >
                  <View style={styles.input}>

                            <Animated.Text style={{
                                position:'absolute',
                                left:this.state.bounceValueCardNumLeft,
                                bottom:0,
                                fontSize:this.state.bounceValueCardNumFontSize,
                                top:this.state.bounceValueCardNumTop,
                              }}>

                                <Text style={{fontSize:16,color:'#6d6e71'}} allowFontScaling={false}>信用卡号</Text>
                            </Animated.Text>

                            <View style={{height:25,width:36,marginTop:35}}>
                              <Image source={require('../icon/icon_creditcard.png')} style={{height:25,width:36,opacity:0.5}}/>
                            </View>

                            <View style={{height:40 ,width:300,marginTop:25,marginLeft:15}} >
                                  <TextInput
                                     style={{flex:1,fontSize:20}}
                                     value={this.state.text}
                                     editable={false}
                                  />
                                  {this._renderMarker()}
                            </View>

                  </View>
              </TouchableWithoutFeedback>

            </View>
            <View style={styles.cardDetails}>

                      <View style={styles.otherInfo}>
                        <View style={styles.title}>
                            <View style={{flex:1}}>
                                <Animated.Text style={{
                                  backgroundColor:'white',
                                  position:'absolute',
                                  left:0,
                                  fontSize:this.state.bounceValueDateFontSize,
                                  top:this.state.bounceValueDateTop,
                                }}>
                                  <Text style={{fontSize:16,color:'#6d6e71'}} allowFontScaling={false}>有效期至</Text>
                                </Animated.Text>

                            </View>

                        </View>
                        <TouchableWithoutFeedback onPress={()=>{this._showDateKeyboard()}} >
                            <View style={styles.input}>
                                  <View style={{flex:0.9, marginTop:10}}>
                                      <Animated.Text style={{
                                        opacity:this.state.opacityExpWord,
                                      }}>
                                        <Text style={{fontSize:25}} allowFontScaling={false}>{this.state.expMonth}/{this.state.expYear}</Text>
                                      </Animated.Text>
                                  </View>
                                  <View style={{flex:0.1,paddingTop:15}}>
                                    <Icon name="question-circle-o" size={18} />
                                  </View>
                            </View>
                        </TouchableWithoutFeedback>
                      </View>

                <TouchableWithoutFeedback onPress={()=>{this._showKeyboard("CVV")}} >
                    <View style={styles.otherInfo}>
                          <View style={styles.title}>
                              <View style={{flex:1}}>
                                <Animated.Text style={{
                                  backgroundColor:'white',
                                  position:'absolute',
                                  left:0,
                                  fontSize:this.state.bounceValueCVVFontSize,
                                  top:this.state.bounceValueCVVTop,
                                }}>
                                  <Text style={{fontSize:16,color:'#6d6e71'}} allowFontScaling={false}>CVV</Text>
                                </Animated.Text>

                              </View>

                          </View>

                          <View style={styles.input}>
                            <View style={{flex:0.9, marginTop:10}}>
                              <Animated.Text style={{
                                opacity:this.state.opacityCVVWord,
                              }}>
                                <View style={{height:40 ,width:100 }} >
                                  <TextInput style={{flex:1,fontSize:25,backgroundColor:'rgba(0,0,0,0)'}}
                                              allowFontScaling={false}
                                              onChangeText={(text) => this.setState({text})}
                                              placeholder="123"
                                              value= {this.state.cvv}
                                              editable={false}
                                  />
                                </View>
                              </Animated.Text>
                            </View>
                            <View style={{flex:0.1,paddingTop:15}}>
                              <Icon name="question-circle-o" size={18} />
                            </View>
                          </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{flex:0.7}}>

          </View>

          <Modal style={styles.modal}
                  position={"bottom"}
                  backdrop={false}
                  isOpen={(this.state.isOpen||this.state.isCVVOpen||this.state.isDateOpen)}
                  swipeToClose={false}>
              <View style={[styles.submitButton,{backgroundColor:this.state.submitButtonColor}]}>
                    <Text style={{color:'white', fontSize:27}} allowFontScaling={false}>SAVE</Text>
              </View>
              <ScrollView style={styles.modalScroll}
                          scrollEnabled={false}
                          horizontal={true}
                          ref='_ScrollView'
              >
                <View style={{flexDirection:'row',flex:1}}>
                          <View style={styles.modalContainer}>
                              <View style={styles.modalContent}>
                              {this._renderKeys(this.state.isCVVOpen)}
                              </View>
                          </View>
                          <View style={styles.modalContainer}>
                                  <View style={{flex:1,flexDirection:'row'}}>
                                         <View style={styles.modalMonthContainer}>

                                             <View style={{height:40,paddingLeft:30,justifyContent:'center'}}><Text style={{color:'#ea7b21'}} allowFontScaling={false}>MONTH</Text></View>
                                             <View style={styles.modalMonthContent}>
                                               {this._renderMonthKeys()}
                                             </View>
                                         </View>
                                         <View style={styles.modalYearContainer}>
                                                 <View style={{height:40,paddingLeft:40,justifyContent:'center'}}><Text style={{color:'#ea7b21'}} allowFontScaling={false}>YEAR</Text></View>
                                                 <View style={styles.modalYearContent}>
                                                   {this._renderYearKeys()}
                                                 </View>
                                         </View>

                                 </View>
                          </View>
                  </View>
              </ScrollView>
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
    flexDirection:'row',
  },
  input:{
    flex:1,//0.6
    flexDirection:'row',
    // backgroundColor:'transparent',
    paddingBottom:10,
    marginBottom:5,
  },
  cardDetails:{
    flex:1,
    paddingTop:20,
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
  modalScroll:{
    flex:1,
  },
  modalContainer:{
    width:deviceWidth,
    height:300,
  },
  modalMonthContainer:{
    flex:0.5,



  },
  modalYearContainer:{
    flex:0.5,
    paddingLeft:10,
    paddingRight:20,

  },
  modalTitle:{
    flex:0.4,
    alignItems:'center',
    justifyContent:'center',

  },

  buttonFont:{
    color:'white',
    fontSize:25
  },
  modalContent:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',

  },
  modalMonthContent:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:20,
    paddingLeft:10,

  },
  modalYearContent:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    paddingLeft:20,
    marginBottom:20,
    borderLeftWidth:1,
    borderColor:'#d9d9d9',
  },
  keyStyle:{
    borderWidth:1,
    borderColor:'#d9d9d9',
    alignItems:'center',
    justifyContent:'center',
    width:deviceWidth/3,
    height:60,

  },
  monthKeyStyle:{

    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:45,


  },
  yearKeyStyle:{

    alignItems:'center',
    justifyContent:'center',

    width:75,
    height:45,

  },
  DateKeyFont:{
    fontSize:20,
  },
  keyFont: {
    fontSize:28,

  },
  submitButton: {
    height:60,
    alignItems:'center',
    justifyContent:'center',

  }




});


AppRegistry.registerComponent('CMKeyBoard', () => CMKeyBoard);
