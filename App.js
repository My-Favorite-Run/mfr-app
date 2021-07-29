// React-native navigator imports
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import from libraries
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import Components
import Map from './screens/Map'
import Calendar from './screens/Calendar'
import Firebase from './screens/Firebase'

//redux imports
import { Provider } from 'react-redux'
import store from './redux/store'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Map"
          tabBarOptions={{
            inactiveTintColor: 'gray'
          }}
        >
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
          <Tab.Screen
            name="Firebase"
            component={Firebase}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="fire" size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}