import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Appbar } from "react-native-paper";

import styles from "./styles.js";
import { startTracking, stopTracking, resetState } from "./utils"
import { useSelector, useDispatch } from "react-redux";

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
export const MapControls = (props) => {
    const state = useSelector(state => state.map);

    if (state.tracking) {
        return (
            <View style={styles.MapControls}>
                <Button title="Stop" onPress={() => {
                    stopTracking();
                    props.onStopPressed()
                }} />
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
        // trying to perform multiple functions within one button
        return (
            <View style={styles.MapControls}>

                <Button title="Start" onPress={() => {
                    startTracking();
                    props.onPlayPausePressed();
                }} />
                <Button title="Reset Stats" onPress={resetState} />
                <TouchableOpacity title="Volume" onPress={() => { alert("volume") }}>
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

    return (
        <View>
            <Appbar.Header
                statusBarHeight={50}
                style={{ backgroundColor: "white" }}>
            </Appbar.Header>
            <Appbar style={styles.MapHeader}>
                <View style={styles.MapControls}>
                    <TouchableOpacity title="Back" onPress={() => { alert("home page") }}>
                        <Image
                            style={styles.button}
                            source={require("../../assets/back-arrow.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity title="Settings" onPress={() => { alert("settings") }}>
                        <Image
                            style={styles.button}
                            source={require("../../assets/settings.png")}
                        />
                    </TouchableOpacity>
                </View>
            </Appbar>
        </View>
    );
};

export const MapFooter = (props) => {
    const state = useSelector(state => state.map);

    if (state.tracking) {
        return (
            <View style={styles.MapControls}>
                <Button title="Stop" onPress={() => {
                    stopTracking();
                    props.onStopPressed();
                }} />
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
            <View>
                <Appbar style={styles.MapFooter}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity title="Start" onPress={() => {
                            startTracking();
                            props.onPlayPausePressed();
                        }}>
                            <Image
                                style={styles.startButton}
                                source={require("../../assets/start-button.png")}
                            />
                        </TouchableOpacity>
                        <Button title="Reset Stats" onPress={resetState} />
                        <TouchableOpacity title="Volume" onPress={() => { alert("volume") }}>
                            <Image
                                style={styles.button}
                                style={{ margin: 30 }}
                                source={require("../../assets/volume.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </Appbar>
            </View>
        );
    }
}