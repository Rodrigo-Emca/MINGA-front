import { configureStore } from "@reduxjs/toolkit";
import textReducer from './Search/reducer'
import mangasReducer from './Mangas/reducer'
import checkReducer from './Checks/reducer'
import alertReducer from './Alert/reducer'

export const store = configureStore({
    reducer:{
        text: textReducer,
        mangas: mangasReducer,
        checks: checkReducer, 
        alert: alertReducer
    }
})