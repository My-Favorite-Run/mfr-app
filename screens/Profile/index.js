import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import { Divider } from 'react-native-elements'

// local imports
import styles from './styles';
import { RenderButtons, RenderUser } from './components'

export default Profile = () => {
    return (
        <View style={styles.background}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo-banner.png')}
            />
            <RenderButtons />
            {/* <RenderUser /> */}
            <View>
                <Divider
                    orientation="horizontal"
                    width={2}
                    inset={true}
                    insetType="middle"
                    color="#B5B5B5"
                />
            </View>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>
                    Don't have an account?{" "}
                </Text>
                <Text style={styles.signUpLink}
                    onPress={() => Alert.alert("Sign up")}                    >
                    Sign up
                </Text>
            </View>
        </View>
    )
}