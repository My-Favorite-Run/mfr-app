import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Button, Icon, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'

//will be graph for progress
export const ActivityCard = (props) => {
    return (
        <Card containerStyle={styles.activityCardContainer}>

        </Card>
    )
}

export const BottomTab = (props) => {
    return (
        <View style={styles.bottomTab}>

        </View>
    )
}

export const Header = () => {
    const navigation = useNavigation();

    const handleNotif = () => {
        navigation.navigate('Notifications')
    }
    const handleSettings = () => {
        navigation.navigate('Profile')
    }
    return (
        <View style={styles.header}>
            <Icon
                name="bell-outline"
                type="material-community"
                color="#FF676F"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={handleNotif}
            />
            <Icon
                name="cog-outline"
                type="material-community"
                color="#FF676F"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={handleSettings}
            />
        </View>
    )
}

export const ProgressChart = (props) => {
    return (
        <View>
            <Card containerStyle={styles.progressChartContainer}>

            </Card>
        </View>
    )
}

// Shows User info
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