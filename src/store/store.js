import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from './Manga/reducers'
import chapterReducer from './Chapters/reducers'

export const store = configureStore({
    reducer: {
        manga: mangaReducer,
        chapters: chapterReducer
    }
})