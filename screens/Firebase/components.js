import React from 'react'
import { View, Button, Text, Image } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/user'
import { loginWithFacebook, logout } from './utils'

export const RenderButton = (props) => {
    const { loggedIn, user } = useSelector((state) => state.user)

    if (!loggedIn) {
        return (
            <Button
                title="Login With Facebook"
                onPress={loginWithFacebook}
            />
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
    const { user } = useSelector((state) => state.user)

    if (!user) {
        return (
            <View />
        )
    }

    return (
        <View>
            <Text>
                {user.displayName}
            </Text>
            <Text>{user.email}</Text>
            <Image source={{ uri: user.photoURL }} />
        </View>
    )
}

