import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './slices/itemSlices'
const store = configureStore({
    reducer: {
        item: itemReducer
    }
})

export default store