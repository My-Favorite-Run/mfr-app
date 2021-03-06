import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Button, Icon, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export const Header = () => {
    const navigation = useNavigation();

    const handleNotif = () => {
        navigation.navigate('Notifications')
    }
    const handleSettings = () => {
        navigation.navigate('ProfileStack', {screen: 'User'})
    }
    return(
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
                name="account-circle"
                type="material-community"
                color="#FF676F"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={handleSettings}
            />
        </View>
    )
}

export const GetCurrDate = () => {
    const [currDate, setCurrDate] = React.useState('')

    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    //Alert.alert(date + '-' + month + '-' + year)

    return (
        <Text>
            {currDate}
        </Text>
    )
}