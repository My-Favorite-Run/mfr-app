import PropTypes from "prop-types";
import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import {Icon} from "react-native-elements"
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Polyline } from "react-native-maps";
import { Appbar } from "react-native-paper";

import styles from "./styles.js";
import { startTracking, stopTracking, resetState } from "./utils"

import { useSelector, useDispatch } from "react-redux";
import { stopLocationUpdatesAsync } from "expo-location";

// Renders the Actual Map
export const RenderMap = () => {
    const { loadedPosition, region, currentLocation, locationsArray } = useSelector(state => state.map);

    if (loadedPosition == false) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <MapView style={styles.map} provider="google" region={region}>
                <Marker coordinate={currentLocation}>
                    <Image
                        style={styles.currentLocationPin}
                        source={require("../../assets/current-location-pin.png")}
                    />
                </Marker>
                <Polyline
                    coordinates={locationsArray}
                    strokeWidth={7}
                    strokeColor="#FF6792"
                    lineCap="round"
                    lineDashPattern={[100, 0]}
                />
            </MapView>
        );
    }
};

// Renders the Map Controls
export const MapControls = () => {
    const state = useSelector(state => state.map);

    if (state.tracking) {
        return (
            <View style={styles.MapControls}>
                <Button title="Stop" onPress={stopTracking} />
                <Text>
                    Total Distance: {state.totalDistance.toFixed(2)} miles
                </Text>
                <Text>
                    Total Time: {state.totalTime} seconds
                </Text>
                <Text>
                    Current Speed: {state.currentSpeed.toFixed(2)} meters/second
                </Text>
            </View>
        );
    } else {
        return (
            <View style={styles.MapControls}>
                <Button title="Start" onPress={startTracking} />
                <Button title="Reset Stats" onPress={resetState} />
                <TouchableOpacity title="Volume" onPress={()=>{alert("volume")}}>
                    <Image 
                        style={styles.button}
                        source={require("../../assets/volume.png")}
                    />
                </TouchableOpacity>
            </View>
        );
    }
};

// Renders the Map Header

export const MapHeader = () => {
    const state = useSelector(state => state.map);
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('HomeStack', {screen: 'Home'})
    }
    // when profile icon pressed, always navigate to user screen, not the last screen the user was on in the stack
    const handleSettings = () => {
        navigation.navigate('ProfileStack', {screen: 'User'})
    }

    return (
        <View>
            <Appbar.Header 
                statusBarHeight="12%"
                style={{backgroundColor: "white"}}>
            </Appbar.Header>
            <Appbar style={styles.MapHeader}>
            <View style={styles.MapControls}>
                <TouchableOpacity title="Back" onPress={handleBack}>
                    <Icon
                        name="arrow-left-circle"
                        type="material-community"
                        color="#FF676F"
                        size={40}
                        containerStyle={styles.iconContainer}
                    />
                </TouchableOpacity>
                <TouchableOpacity title="Settings" onPress={handleSettings}>
                    <Icon
                        name="cog-outline"
                        type="material-community"
                        color="#FF676F"
                        size={40}
                        containerStyle={styles.iconContainer}
                    />
                </TouchableOpacity>
            </View>
        </Appbar>
      </View>
    );
  };

export const MapFooter = () => {
    const state = useSelector(state => state.map);

    if (state.tracking) {
        return (
            <View style={styles.MapControls}>
                <Button title="Stop" onPress={stopTracking} />
                <Text>
                    Total Distance: {state.totalDistance.toFixed(2)} miles
                </Text>
            </View>
        );
    } else {
        return (
            <View>
                <Appbar style={styles.MapFooter}> 
                    <View style={styles.MapControls}>
                    <TouchableOpacity title="Start" onPress={startTracking}>
                        <Image 
                            style={styles.startButton}
                            source={require("../../assets/start-button.png")}
                        />
                    </TouchableOpacity>
                    <Button title="Reset Stats" onPress={resetState} />
                    <TouchableOpacity title="Volume" onPress={()=>{alert("volume")}}>
                        <Image 
                            style={styles.button}
                            style={{margin: 20}}
                            source={require("../../assets/volume.png")}
                        />
                    </TouchableOpacity>
                    </View>
                </Appbar>
            </View>
        );
    }
}