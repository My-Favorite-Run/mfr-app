# My Favorite Run App

## Running + Building App

### Development Requirements

- The [expo installation page](https://docs.expo.io/get-started/installation/) has a short guide on getting the development tools setup
  After you setup the tools:

1. Run `git clone https://github.com/My-Favorite-Run/mfr-app` and it will create a new folder on your computer with all the code
2. Run `cd mfr-app` to navigate into the folder
3. Run `npm install`

### Running through Expo Go

- This is the fastest way to run the app
- Run `expo start` and it should start a server
- You can then use the Expo Go app to scan the qr code it shows

### Building the App through expo servers

- Here is the [guide to building an app](https://docs.expo.io/distribution/building-standalone-apps/) through the expo servers
- Essentially just run `expo build:android --release-channel dev` or `expo build:ios --release-channel dev`
  - For now, only the dev release channel is in use, but later we should add a `prod` release channel as well
- You will see that building an app takes quite a bit of time, but if you want, you can build it locally (described below)
- Also, you will not need to build a new app everytime you edit the code. Instead you can publish the edited app on the dev release channel (described below) and it will save a lot of time

### Publishing Apps

- When not modifying the `app.json` file or adding new packages, publishing the app is much faster than completely building the app
- Run `expo publish --release-channel dev` to publish the developer-version of the app
- Once published, you can tap on the "Update Dev App" button on the installed app on your phone/simulator to update the app
- Learn more about the release channels [here](https://docs.expo.io/distribution/release-channels/)!

### Building Apps Locally

- Building apps locally is faster than building on expo servers, since expo servers have a waiting list. However, building apps locally takes a bit more setup and is completely optional.
- Use [turtle-cli](https://docs.expo.io/distribution/turtle-cli/) if you want to build locally
- Building an app is usually only required when changing the `app.json` file or when adding new modules/packages. In other cases, publishing the app is a much faster approach
- When building an app with `turtle`, make sure to add a `--public-url` flag that points to the manifest
  - For example I used the following command to build the app:
  - `turtle build:android --keystore-path ./My-Favorite-Run.jks --keystore-alias QG15ZmF2b3JpdGVydW4vTXktRmF2b3JpdGUtUnVu -c ./app.json --public-url 'https://exp.host/@myfavoriterun/My-Favorite-Run/index.exp?release-channel=dev&sdkVersion=41.0.0'`

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
