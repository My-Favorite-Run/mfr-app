import React from 'react';
import {View, Text} from 'react-native'

import styles from './styles';

function Notifications(props) {
    return (
        <View style={styles.background}>
            <View style={styles.text}>
                <Text>
                    Notifications
                </Text>
            </View>
        </View>
    );
}

export default Notifications;