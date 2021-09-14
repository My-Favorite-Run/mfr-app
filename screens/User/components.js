import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Button, Icon, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

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

    const handleBack = () => {
        navigation.navigate('HomeStack', {screen: 'Home'})
    }
    const handleSettings = () => {
        navigation.navigate('Profile')
    }
    return(
        <View style={styles.header}>
            <Icon
                name="arrow-left-circle"
                type="material-community"
                color="#FF676F"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={handleBack}
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

//