import React from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';
import {Header, GetDays} from './components';

function Home(props) {
    return (
        <View style={styles.background}>
            <Header/>
            <GetDays/>
            <View style={styles.text}>
                <Text>
                    Home
                </Text>
            </View>
        </View>
    );
}

export default Home;