import PropTypes from "prop-types";
import React from "react";
import { View, Text, Button, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

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
                        style={styles.markerIcon}
                        source={require("../../assets/currentLocation.png")}
                    />
                </Marker>
                <Polyline
                    coordinates={locationsArray}
                    strokeWidth={7}
                    strokeColor="#FF6792"
                    lineCap="round"
                    lineDashPattern={[0]}
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
            </View>
        );
    } else {
        return (
            <View style={styles.MapControls}>
                <Button title="Start" onPress={startTracking} />
                <Button title="Reset Stats" onPress={resetState} />
            </View>
        );
    }
};

