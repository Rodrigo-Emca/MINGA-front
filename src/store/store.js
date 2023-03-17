import { configureStore } from "@reduxjs/toolkit";
import textReducer from './Search/reducer'
import mangasReducer from './Mangas/reducer'
import checkReducer from './Checks/reducer'
import alertReducer from './Alert/reducer'
import mangaReducer from './Manga/reducers'
import chapterReducer from './Chapters/reducers'

export const store = configureStore({
    reducer:{
        text: textReducer,
        mangas: mangasReducer,//G
        checks: checkReducer, 
        alert: alertReducer,
        manga: mangaReducer,
        chapters: chapterReducer
    }
})