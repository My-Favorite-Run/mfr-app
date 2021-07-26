import getDistance from "geolib/es/getDistance";

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
