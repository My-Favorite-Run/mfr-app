// Firebase imports
import firebase from 'firebase/app'
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";

import * as Facebook from 'expo-facebook'
import * as GoogleSignIn from 'expo-google-sign-in'

//redux imports
import store from '../../redux/store'
import { authUser, logoutUser } from '../../redux/user'
import { Alert } from 'react-native';

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
        userData = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            uid: user.uid
        }

        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        })

        store.dispatch(authUser(userData))
        console.log(userData)
    }

    //user is signed out
    else {
        store.dispatch(logoutUser())
        console.log('We are signed out now!')
    }

});

export async function loginWithFacebook() {
    try {
        await Facebook.initializeAsync({ appId: '1303402176721089' });
        const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile', 'email'] });

        if (type === 'success') {
            //Build Firebase credential with Facebook aceess token
            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            //Sign in with credential
            firebase.auth().signInWithCredential(credential).catch(error => {
                //catch errors
                console.log(error);
                Alert.alert("Error!" + error.message)
            });
        } else {
            // type === 'cancel'
        }
    } catch (error) {
        console.log(error);
        alert(`Facebook Login Error: ${error}`);
    }
}

export async function logout() {
    try {
        //await Facebook.logOutAsync()
        await firebase.auth().signOut()
        //store.dispatch(logoutUser())
    } catch (error) {
        console.log(error);
    }
}

export async function loginWithGoogle() {
    try {
        await GoogleSignIn.initAsync()

        await GoogleSignIn.askForPlayServicesAsync()
        const { type, user } = await GoogleSignIn.signInAsync()

        if (type === 'success') {
            //Build Firebase credential with Google access token
            const credential = firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken);
            //Sign in with credential
            firebase.auth().signInWithCredential(credential).catch(error => {
                //catch errors
                console.log(error);
                Alert.alert("Error!" + error.message)
            });
        }
    } catch (error) {
        console.log(error);
        Alert.alert("Google Login Error: " + error.message)
    }
}
