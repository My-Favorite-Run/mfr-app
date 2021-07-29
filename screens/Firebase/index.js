import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import firebase from 'firebase/app'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCgJYFpwxqeV8ubgxGXJaZGR2xKUkCJ-eI",
    authDomain: "mapsandcalendarapi.firebaseapp.com",
    projectId: "mapsandcalendarapi",
    storageBucket: "mapsandcalendarapi.appspot.com",
    messagingSenderId: "792848863139",
    appId: "1:792848863139:web:539cdaa5c5ca18dbbcd416",
    measurementId: "G-DE58ZPVQ5Z"
};

firebase.initializeApp(firebaseConfig);


export default class Firebase extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Nothing here for now </Text>
            </View>
        )
    }
}