import React from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';
import {Header, GetDays, DistanceInfo, SpeedInfo, TimeInfo, MapView} from './components';
import {FAB, Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useFonts, Barlow } from 'expo-font';

function Home(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.background}>
            <Header/>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>
                    Ready for your run?
                </Text>
            </View>
            <GetDays/>
            <View style={styles.body}>
                <View style={{alignItems: "center"}}>
                    <DistanceInfo/>
                    <View style={{flexDirection: "row"}}>
                        <SpeedInfo/>
                        <TimeInfo/>
                    </View>
                </View>
                <MapView/>
            </View>
        </View>
    );
}

export default Home;