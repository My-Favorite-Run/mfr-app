import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import store from "../../redux/store"
import { initialLocation, subscribeUpdate, stopTrackingState, resetGlobalState, updateTotalTime } from "../../redux/map";

export const BACKGROUND_TASK = "background-location-task";

//need this global var to be able to start and stop the timer using setInterval
var timer = null;

// Define the task manager
TaskManager.defineTask(BACKGROUND_TASK, ({ data, error }) => {
  if (error) {
    console.error(error.message);
  }
  if (data) {
    //console.log(data)
    const { latitude, longitude, speed } = data.locations[0].coords;
    const timestamp = data.locations[0].timestamp;

    console.log(store.getState())

    store.dispatch(subscribeUpdate({ latitude, longitude, timestamp, speed }))
  }
});

// request permissions to use location services
export const _getPermissions = async () => {

  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Foreground Permissions not given")
    return { error: true };
  }

  await Location.requestBackgroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Background Permissions not given")
    return { error: true };
  }

  return { error: false };
};

// runs when map is loading and everytime the map is reset
export async function getInitialLocation() {
  let { error } = await _getPermissions();
  if (error) return;

  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Lowest,
  });

  const { latitude, longitude, speed } = location.coords;
  const timestamp = location.timestamp;

  // this updates the global state with the current location
  store.dispatch(initialLocation({ latitude, longitude, timestamp, speed }));
}


// start background location task
export async function startTracking() {
  let { error } = await _getPermissions();
  if (error) return;

  //starts the timer
  timer = setInterval(() => {
    store.dispatch(updateTotalTime())
  }, 1000);

  //starts the background location task
  await Location.startLocationUpdatesAsync(BACKGROUND_TASK, {
    accuracy: Location.Accuracy.BestForNavigation,
    distanceInterval: 10,
    foregroundService: {
      notificationTitle: "My Favorite Run",
      notificationBody: "Tracking Run...",
    },
  });
};

// stop background location task
export function stopTracking() {
  Location.stopLocationUpdatesAsync(BACKGROUND_TASK);
  clearInterval(timer)
  store.dispatch(stopTrackingState())
}

export function resetState() {
  store.dispatch(resetGlobalState())
  getInitialLocation()
}