// Firebase imports
import firebase from 'firebase/app'
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";

import * as Facebook from 'expo-facebook'

//redux imports
import store from '../../redux/store'
import { authUser, logoutUser } from '../../redux/user'

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
                console.log(error);
            });

            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            const userData = await response.json();
            alert(`Logged In!`);
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
