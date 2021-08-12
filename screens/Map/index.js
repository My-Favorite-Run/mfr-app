// importing from libaries
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

// local imports
import styles from "./styles";
import { RenderMap, MapControls, MapHeader, MapFooter } from "./components";
import { getInitialLocation, stopTracking } from "./utils";

// redux imports
import { useSelector, useDispatch } from "react-redux";

// main component
export default Maps = (props) => {
  const store = useSelector(state => state.map);
  const dispatcher = useDispatch();
  // when the map is loaded, get the initial location
  // and when the component is destroyed, stop the background task
  // effectively works as compoonentDidMount
  // and the cleanup function works as a componentWillUnmount
  useEffect(() => {
    // basically componentDidMount
    async function getLocation() {
      await getInitialLocation();
    }
    getLocation();

    // basically componentWillUnmount
    return function cleanup() {
      stopTracking();
    }
  }, [])

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
      <MapHeader />
        <RenderMap />
        <MapControls />
      </View>
      <MapFooter />
    </>
  )

}

