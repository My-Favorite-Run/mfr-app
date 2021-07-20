import React from 'react'
import { Text, Button, View, Alert } from 'react-native'
import * as GoogleSignIn from 'expo-google-sign-in'
import styles from './styles'
import RenderCalendarEvents from '../../components/RenderCalendarEvents'
import { getWeeklyEvents } from './apiHelpers'
import * as Updates from "expo-updates"

export default class AuthScreen extends React.Component {
    state = {
        user: null,
        eventsArray: []
    }

    componentDidMount() {
        this.initAsync()
    }

    initAsync = async () => {
        await GoogleSignIn.initAsync({
            scopes: ['https://www.googleapis.com/auth/calendar']
        })
        this._syncUserWithStateAsync()
    }

    _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync()
        this.setState({ user })
    }

    signOutAsync = async () => {
        await GoogleSignIn.signOutAsync()
        this.setState({ user: null })
    }

    signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync()
            if (type === 'success') {
                this._syncUserWithStateAsync()
            }
        } catch ({ message }) {
            Alert.alert('login: Error:' + message)
        }
    }

    async updateEvents() {
        let events = await getWeeklyEvents(this.state.user.auth.accessToken)
        this.setState({
            eventsArray: events
        })
    }

    async updateDevApp() {
        try {
            const update = await Updates.checkForUpdateAsync()
            if (update.isAvailable) {
                await Updates.fetchUpdateAsync()
                alert("Update Completed!")
                Updates.reloadAsync()
            }
        } catch (e) {
            Alert.alert(JSON.stringify(e))
        }

    }

    RenderButton = () => {
        if (this.state.user) {
            return (
                <>
                    <Button
                        title="Sign Out"
                        onPress={this.signOutAsync}
                    />
                    <Button
                        title="Get Events"
                        onPress={() => this.updateEvents()}
                    />
                </>
            )
        } else {
            return (
                <Button
                    title="Sign In"
                    onPress={this.signInAsync}
                />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <this.RenderButton />
                <RenderCalendarEvents eventsArray={this.state.eventsArray} />
                <Button title="Update Dev App" onPress={this.updateDevApp} />
            </View>
        )
    }
}
