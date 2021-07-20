import PropTypes from "prop-types";
import React from "react";
import { View, Text, Button, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import getDistance from "geolib/es/getDistance";

import styles from "./styles.js";

//Runs everytime that state needs to be updated (during subscribe location or init location )
export function updateStateFunc(currentLocation, type = "subscribe") {
  console.log(currentLocation);

  let tracking = false;
  let totalDistance = 0;

  if (type != "initialLocation") {
    tracking = true;
    totalDistance =
      this.state.totalDistance +
      getDistance(
        currentLocation,
        this.state.locationsArray[this.state.locationsArray.length - 1]
      ) /
        1609.344;
  }

  this.setState({
    locationsArray: [...this.state.locationsArray, currentLocation],
    currentLocation: currentLocation,
    region: {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
    },
    loadedPosition: true,
    tracking,
    totalDistance,
  });
}

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
