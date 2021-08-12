import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './map'
import userReducer from './user'

export default configureStore({
    reducer: {
        map: mapReducer,
        user: userReducer
    }
})