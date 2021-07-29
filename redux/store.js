import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './map'

export default configureStore({
    reducer: {
        map: mapReducer
    }
})