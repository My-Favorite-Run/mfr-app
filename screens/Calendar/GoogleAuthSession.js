import * as React from "react"
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { View, Button, Text, Alert } from 'react-native'
import { getCalendarIds, getWeeklyEvents } from './helpers'
import { RenderCalendarEvents } from './components'
import styles from './styles'

WebBrowser.maybeCompleteAuthSession()

export default function GoogleApi() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [userAccessToken, setUserAccessToken] = React.useState("")
    const [eventsArray, setEventsArray] = React.useState([])

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '792848863139-1mvfell3jvb714p4nasck5269rjp9imt.apps.googleusercontent.com',
        androidClientId: '792848863139-0f04j2njbfsaf9ele2uhobkq5um2c2il.apps.googleusercontent.com',
        scopes: ['https://www.googleapis.com/auth/calendar']
    })

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            setIsLoggedIn(true)
            setUserAccessToken(authentication.accessToken)
            console.log(userAccessToken)
        } else {

        }
    }, [response]);

    const Login = () => {
        if (isLoggedIn) {
            return (
                <Button
                    title="Get Events"
                    onPress={updateEvents}
                />
            )
        } else {
            return (
                <Button
                    title="Login"
                    onPress={() => { promptAsync() }}
                />

            )
        }
    }

    async function updateEvents() {
        let events = await getWeeklyEvents(userAccessToken)
        setEventsArray(events)
        console.log(events)
        return events
    }

    return (
        <View style={styles.container}>
            <Login />
            <RenderCalendarEvents eventsArray={eventsArray} />
        </View>
    )
}