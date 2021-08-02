import { createSlice } from "@reduxjs/toolkit"
import getDistance from "geolib/es/getDistance"

export const mapSlice = createSlice({
    name: "map",
    initialState: {
        region: {},
        currentLocation: {},
        locationsArray: [],
        totalDistance: 0,
        loadedPosition: false,
        tracking: false,
    },
    reducers: {
        // called when the initial location is loaded
        initialLocation: (state, { payload }) => {
            state.tracking = false
            state.totalDistance = 0
            state.loadedPosition = true
            state.locationsArray = [...state.locationsArray, payload]
            state.currentLocation = payload
            state.region = {
                latitude: payload.latitude,
                longitude: payload.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            }
        },

        // called everytime the location is updated
        subscribeUpdate: (state, { payload }) => {
            state.tracking = true
            state.totalDistance =
                state.totalDistance +
                getDistance(
                    payload,
                    state.locationsArray[state.locationsArray.length - 1]
                ) /
                1609.344;
            state.loadedPosition = true
            state.locationsArray = [...state.locationsArray, payload]
            state.currentLocation = payload
            state.region = {
                latitude: payload.latitude,
                longitude: payload.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            }
        },

        // called when the user stops tracking and when state is reset
        resetGlobalState: (state) => {
            state.region = {}
            state.currentLocation = {}
            state.locationsArray = []
            state.totalDistance = 0
            state.loadedPosition = false
            state.tracking = false
        },

        // called after user stops tracking the location
        stopTrackingState: (state) => {
            state.tracking = false
        }
    }
})

export const { subscribeUpdate, initialLocation, resetGlobalState, stopTrackingState } = mapSlice.actions
export default mapSlice.reducer