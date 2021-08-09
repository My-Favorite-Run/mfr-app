import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

// local imports
import styles from './styles';
import { RenderButtons, RenderUser } from './components'

export default Profile = () => {
    return (
        <View style={styles.container}>
            <RenderButtons />
            <RenderUser />
        </View>
    )
}