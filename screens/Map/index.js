import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

import styles from "./styles";
import { updateStateFunc } from "./helpers";
import { RenderMap } from "./components"

const BACKGROUND_TASK = "background-location-task";

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      currentLocation: {},
      locationsArray: [],
      totalDistance: 0,
      loadedPosition: false,
      tracking: false,
    };

    updateState = updateStateFunc.bind(this);
  }

  startTracking = async () => {
    await this._getPermissions();
    await Location.startLocationUpdatesAsync(BACKGROUND_TASK, {
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 10,
      foregroundService: {
        notificationTitle: "My Favorite Run",
        notificationBody: "Tracking Run...",
      },
    });
  };

  stopTracking() {
    Location.stopLocationUpdatesAsync(BACKGROUND_TASK);
    this.setState({
      tracking: false,
    });
  }

  _getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    await Location.requestBackgroundPermissionsAsync();
  };

  // runs when the reset button is pressed
  resetState = () => {
    this.setState({
      region: {},
      currentLocation: {},
      locationsArray: [],
      totalDistance: 0,
      loadedPosition: false,
      tracking: false,
    });

    this.getInitialLocation();
  };

  // runs when map is loading and everytime the map is reset
  async getInitialLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    await Location.requestBackgroundPermissionsAsync();
    if (status !== "granted") {
      console.log("permission not granted");
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const { latitude, longitude } = location.coords;

    updateState({ latitude, longitude }, "initialLocation");
  }

  async componentDidMount() {
    await this.getInitialLocation();
  }

  async componentWillUnmount() {
    Location.stopLocationUpdatesAsync(BACKGROUND_TASK);
  }

  MapControls = () => {
    if (this.state.tracking) {
      return (
        <View style={styles.MapControls}>
          <Button title="Stop" onPress={() => this.stopTracking()} />
          <Text>
            Total Distance: {this.state.totalDistance.toFixed(2)} miles
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.MapControls}>
          <Button title="Start" onPress={this.startTracking} />
          <Button title="Reset Stats" onPress={this.resetState} />
        </View>
      );
    }
  };

  render() {
    return (
      <>
        <StatusBar />
        <View style={styles.container}>
          <RenderMap
            loadedPosition={this.state.loadedPosition}
            region={this.state.region}
            currentLocation={this.state.currentLocation}
            locationsArray={this.state.locationsArray}
          />
          <this.MapControls />
        </View>
      </>
    );
  }
}

TaskManager.defineTask(BACKGROUND_TASK, ({ data, error }) => {
  if (error) {
    console.error(error.message);
  }
  if (data) {
    const { latitude, longitude } = data.locations[0].coords;

    updateState({ latitude, longitude });
  }
});
