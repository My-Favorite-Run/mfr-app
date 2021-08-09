// Firebase imports
import firebase from 'firebase/app'
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";

// Initialize Firebase with the proper configurations
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

export default firebase;
