import React from 'react'
import { View, Button, Text, Image } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import { loginWithFacebook, loginWithGoogle, logout } from './utils'

export const RenderButtons = (props) => {
    //get logged in state from redux store
    const { loggedIn, user } = useSelector((state) => state.user)

    if (!loggedIn) {
        return (
            <View>
                <Button
                    title="Login With Facebook"
                    onPress={loginWithFacebook}
                />
                <Button
                    title="Login With Google"
                    onPress={loginWithGoogle}
                />

            </View>
        )
    } else {
        return (
            <Button
                title="Logout"
                onPress={logout}
            />
        )
    }
}

export const RenderUser = (props) => {
    // get user global state from redux
    const { user } = useSelector((state) => state.user)

    if (!user) {
        return (
            <View>
                <Text> Not logged in </Text>
            </View>
        )
    }

    return (
        <View>
            <Text>
                {user.displayName}
            </Text>
            <Text>{user.email}</Text>
            <Image style={styles.profilePic} source={{ uri: user.photoURL }} />
        </View>
    )
}

