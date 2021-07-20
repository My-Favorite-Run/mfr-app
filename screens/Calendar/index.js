import GoogleAuthSession from './GoogleAuthSession'
import GoogleSignIn from './GoogleSignIn'
import React from 'react'
import Constants from 'expo-constants'
import { View } from 'react-native'


export default class Calendar extends React.Component {

    /*
    - We need to use two separate methods for authentication, based on how we are running the app.
        - GoogleAuthSession only works for the Expo Go app, so we can only use it for quick development.
        - GoogleSignIn only works on standalone/production apps.
    - Important to modularize the visual components, so we can reuse the same components for both methods.
      Both GoogleAuthSession and GoogleSignIn should ONLY be used for authentication, and 
      any actual features should be inside the Components folder (such as RenderCalendarEvents)
    */
    render() {
        if (Constants.appOwnership === 'expo') {
            return <GoogleAuthSession />
        } else if (Constants.appOwnership === 'standalone') {
            return <GoogleSignIn />
        }
    }
}
