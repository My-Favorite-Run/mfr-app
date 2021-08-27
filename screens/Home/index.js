import React from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';
import {Header, GetCurrDate} from './components';

function Home(props) {
    return (
        <View style={styles.background}>
            <Header/>
            <View style={styles.text}>
                <Text>
                    Home 
                </Text>
                <GetCurrDate/>
            </View>
        </View>
    );
}

export default Home;