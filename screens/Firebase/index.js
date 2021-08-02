import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import * as Facebook from 'expo-facebook'

import firebase from 'firebase/app'
// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

import styles from './styles';

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

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
        console.log('We are authenticated now!');
    }

    // Do other things
});

async function loginWithFacebook() {
    try {
        await Facebook.initializeAsync({ appId: '1303402176721089' });
        const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'], });

        if (type === 'success') {
            //Build Firebase credential with Facebook aceess token
            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            //Sign in with credential
            firebase.auth().signInWithCredential(credential).catch(error => {
                console.log(error);
            });

            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            // type === 'cancel'
        }
    } catch (error) {
        console.log(error);
        alert(`Facebook Login Error: ${error}`);
    }
}

export default Firebase = () => {
    return (
        <View style={styles.container}>
            <Button
                title="Login with Facebook"
                onPress={loginWithFacebook}
            />
        </View>
    )
}