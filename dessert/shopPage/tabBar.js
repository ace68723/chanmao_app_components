import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// const xOffset = new Animated.Value(0);
// const onScroll = Animated.event([{ nativeEvent: { contentOffset: {x: xOffset} } }],
//                 { useNativeDriver: true });
//
//

export default class TabBar extends Component{
  constructor(props){
    super(props)

  }


  renderTabOption(name, page) {

  }

  renderTab(name, page, isTabActive, onPressHandler) {

    const textColor = isTabActive ? "#ff7681" : "black";
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <TouchableWithoutFeedback
      style={{flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}

      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab ]}>
        <Text allowFontScaling={false} style={[{color: textColor, fontWeight, },]}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>;
  }

  render() {

    let currentTab =this.props.tabs[this.props.activeTab];
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    // const tabLength = xOffset.interpolate({
    //   inputRange: [0, 1, ], outputRange: [currentTab.length*15,  this.props.tabs[Math.round(this.props.scrollValue._value)].length*15, ],
    // });
    const tabUnderlineStyle = {
      position: 'absolute',
      width: currentTab.length*15,
      marginLeft: ((containerWidth / numberOfTabs)-(currentTab.length*15))*0.5,
      height: 2,
      backgroundColor: "#ff7681",
      bottom: 18,
    };

    const left = {
      transform: [
        {
          translateX: this.props.scrollValue.interpolate({
            inputRange: [0, 1,],
            outputRange: [0, containerWidth / numberOfTabs,],
          })
        }
      ]
    }


    return (
      <View style={[styles.tabs, {backgroundColor: null, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[tabUnderlineStyle, left, this.props.underlineStyle, ]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
});
