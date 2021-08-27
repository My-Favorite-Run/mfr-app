import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import { loginWithFacebook, loginWithGoogle, logout } from './utils'

export const RenderButtons = (props) => {
    //get logged in state from redux store
    const { loggedIn, user } = useSelector((state) => state.user)

    if (!loggedIn) {
        return (
            <View style={styles.buttonsContainer}>
                <Button 
                    buttonStyle={styles.buttonFacebook}
                    containerStyle={styles.button}
                    title="Continue with Facebook"
                    onPress={loginWithFacebook}
                    icon={
                        <Icon 
                            type="font-awesome-5"
                            name="facebook-square"
                            color="#FFFFFF"
                        />
                    }
                />
                <Button 
                    buttonStyle={styles.buttonGoogle}
                    containerStyle={styles.button}
                    title="Continue with Google"
                    onPress={loginWithGoogle}
                    icon={
                        <Icon
                            type="font-awesome-5"
                            name="google"
                            color="#FFFFFF"
                        />
                    }
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

    // if (!user) {
    //     return (
    //         <View>
    //             <Text> Not logged in </Text>
    //         </View>
    //     )
    // }

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

