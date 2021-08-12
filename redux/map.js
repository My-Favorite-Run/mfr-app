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
        currentSpeed: null,
        totalTime: 0
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
            state.currentSpeed = null
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
            state.currentSpeed = payload.speed
        },

        // called when the user stops tracking and when state is reset
        resetGlobalState: (state) => {
            state.region = {}
            state.currentLocation = {}
            state.locationsArray = []
            state.totalDistance = 0
            state.loadedPosition = false
            state.tracking = false
            state.currentSpeed = null
            state.totalTime = 0
        },

        //updates the total time, called each second
        updateTotalTime: (state, { payload }) => {
            state.totalTime = state.totalTime + 1
        },

        // called after user stops tracking the location
        stopTrackingState: (state) => {
            state.tracking = false
        }
    }
})

// exporting all the reducers
export const { subscribeUpdate, initialLocation, resetGlobalState, updateTotalTime, stopTrackingState } = mapSlice.actions
export default mapSlice.reducer