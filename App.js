// React-native navigator imports
import 'react-native-gesture-handler'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import from libraries
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import Components
import Map from './screens/Map'
import Calendar from './screens/Calendar'
import Profile from './screens/Profile'
import SignUp from './screens/SignUp'
import User from './screens/User'
import Home from './screens/Home'
import Notifications from './screens/Notifications'

//redux imports
import { Provider } from 'react-redux'
import store from './redux/store'

//import font
import { useFonts, Barlow } from '@expo-google-fonts/barlow';

const Tab = createBottomTabNavigator()
const ProfileStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()

//Home stack
function HomeStackNav() {
  return(
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Notifications" component={Notifications}/>
      <HomeStack.Screen name="ProfileStack" component={ProfileStackNav}/>
    </HomeStack.Navigator>
  )
}

//Profile stack
function ProfileStackNav() {
  return (
      <ProfileStack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName="User"
      >
        <ProfileStack.Screen name="User" component={User} />
        <ProfileStack.Screen name="Profile" component={Profile}/>
        <ProfileStack.Screen name="Notifications" component={Notifications}/>
      </ProfileStack.Navigator>
  );
}

export default function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#FF676F',
            inactiveTintColor: '#B5B5B5',
            style: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStackNav}
            
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home-heart" size={size} color={color} />
              ),
            }}
            />

          <Tab.Screen 
            name="Map"
            component={Map}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen
             name="Calendar"
             component={Calendar}
             options={{
               tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar" size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
