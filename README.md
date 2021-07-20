# My Favorite Run App

## Running + Building App

### Development Requirements

- The [expo installation page](https://docs.expo.io/get-started/installation/) has a short guide on getting the development tools setup

## APIs + Links:

### Google Maps features

- React-native's [react-native-maps](https://docs.expo.io/versions/v42.0.0/sdk/map-view/) module is being used to display the Map
  - The [Marker](https://github.com/react-native-maps/react-native-maps/blob/master/docs/marker.md) is used to show the current location of the user
  - The [Polyline](https://github.com/react-native-maps/react-native-maps/blob/master/docs/polyline.md) is used to create the line that shows the path of the user while tracking
- Using the Expo [Location](https://docs.expo.io/versions/v42.0.0/sdk/location/) module to get geolocation data of the user
  - Using [`requestForegroundPermissionsAsync()`](https://docs.expo.io/versions/v42.0.0/sdk/location/#locationrequestforegroundpermissionsasync) and [`requestBackgroundPermissionsAsync()`](https://docs.expo.io/versions/v42.0.0/sdk/location/#locationrequestbackgroundpermissionsasync) to get the permissions from the user
  - Using [`Location.getCurrentPositionAsync()`](https://docs.expo.io/versions/v42.0.0/sdk/location/#locationgetcurrentpositionasyncoptions) to get initial position
  - Using [`Location.startLocationUpdatesAsync()`](https://docs.expo.io/versions/v42.0.0/sdk/location/#locationstartlocationupdatesasynctaskname-options) to subscribe to background location updates
- Using [geolib](https://www.npmjs.com/package/geolib/v/1.3.4) only for the `geolib.getDistance()` function to calculate distance

### Google Sign In

- Google Sign-In require a different approach when testing with Expo Go App vs with a Production App
- For Expo Go App, you must use Expo's [AuthSession](https://docs.expo.io/versions/v42.0.0/sdk/auth-session/) method
- For Production App, you must use Expo's [GoogleSignIn](https://docs.expo.io/versions/v42.0.0/sdk/google-sign-in/) method
  - The `AuthSession` method didn't work with the production build on android, but maybe it works on the production build of ios?
- There is more written about this inside the `screens/Calendar/index.js` file

## Note For iOS dev

- Make sure to add proper keys and values into the `/app.json` file
  - To get `react-native-maps` running, [here is the doc](https://docs.expo.io/versions/v42.0.0/sdk/map-view/#deploying-google-maps-to-an-ios-standalone)
  - For Google AuthSession, [here is the doc](https://docs.expo.io/guides/authentication/#ios-native)
    - not sure if you need to do this, since i think we might use google-sign-in in the production app, but leaving this here just in case
  - Getting the location will definitely require `app.json` modification, so look through [this page](https://docs.expo.io/versions/v42.0.0/sdk/location/)
    - Note that we are using the _Background Location Methods_, so definitely add the required settings in order to get it to work
  - There will probably be more things required to change, but I'm not entirely sure what other problems will pop up
- The running/building on iOS portion of this doc isn't fleshed out, so please add those details once you can get the app to run/build on iOS.
