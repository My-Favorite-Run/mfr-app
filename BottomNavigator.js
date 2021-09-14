import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements'

class BottomNavigator extends Component {
    render() {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#F4F4F4',
        }}>
          {/* <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#FFFFFF', width: 70, height: 70, borderRadius: 35, bottom: 25, zIndex: 10, borderWidth: 1}}> */}
            <Icon
              name='plus-circle'
              type='material-community'
              color='#FF676F'
              size={60}
              containerStyle={{
                position: "absolute",
                bottom: 25,
                zIndex: 10,
                width: 60,
                height: 60,
                borderRadius: 30,
                textAlign: "center",
                justifyContent: "center",
                alignSelf: "center",
                //borderWidth: 1,
                backgroundColor: "#F4F4F4",
                // alignSelf: 'center',
                // width: 50,
                // height: 50,
                // borderRadius: 20,
                // borderWidth: 1
              }}
              //reversesize={28}
              onPress={() => {}}
            />
          {/* </View> */}
          <View 
            style={{
              position: 'absolute', 
              flex: 1,
              backgroundColor: '#FFFFFF', 
              bottom: 0, 
              zIndex: 1, 
              width: '100%', 
              height: 60, 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              paddingHorizontal: 15, 
              paddingVertical: 10, 
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,}}>
            <Icon
              name='home-heart'
              type='material-community'
              color='#FF676F'
              onPress={() => {}}
              size={35}
            />
            <Icon
              name='calendar'
              type='material-community'
              color='#FF676F'
              size={35}
            />
            {/* to leave a space in the middle */}
            <Icon
              name='calendar'
              type='material-community'
              color="#FFFFFF"
              size={35}
            />
            <Icon 
              name='map'
              type='material-community'
              color='#FF676F'
              onPress={() => {}}
              size={35}
            />
            <Icon
              name="head-heart-outline"
              type='material-community'
              color='#FF676F'
              onPres={() => {}}
              size={35}
            />
          </View>
        </View>
      )
    }
  }

export default BottomNavigator;
  