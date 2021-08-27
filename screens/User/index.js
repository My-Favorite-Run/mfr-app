import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements'
import { ProgressChart, ActivityCard, Header, BottomTab } from './components';


// local imports
import styles from './styles';
import { RenderButtons, RenderUser } from './components'

export default User = ({ navigation }) => {
    const cards = [<ActivityCard />, <ActivityCard />, <ActivityCard />]
    return (
        <View style={styles.background}>
            <Header />
            <View style={styles.userContainer}>
                <Avatar
                    rounded
                    title="MT"
                />
                <RenderUser />
            </View>
            <View style={styles.progressContainer}>
                <Text style={styles.progressTitle}>
                    Progress
                </Text>
                <ProgressChart />
            </View>
            <View style={styles.activityContainer}>
                <Text style={styles.activityTitle}>
                    Activity
                </Text>
                <ActivityCard />
            </View>

            {/* <BottomTab/> */}
        </View>
    )
}