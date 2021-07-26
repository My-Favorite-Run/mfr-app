import PropTypes from "prop-types";
import React from "react";
import { View, Text, Button, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

import styles from "./styles.js";

// Renders the Actual Map
export const RenderMap = ({
    loadedPosition,
    region,
    currentLocation,
    locationsArray,
}) => {
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
                />
            </MapView>
        );
    }
};
//checking types
RenderMap.propTypes = {
    loadedPosition: PropTypes.bool.isRequired,
    region: PropTypes.object.isRequired,
    currentLocation: PropTypes.object.isRequired,
    locationsArray: PropTypes.array.isRequired,
};

