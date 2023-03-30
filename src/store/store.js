import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./Search/reducer";
import mangasReducer from "./Mangas/reducer";
import checkReducer from "./Checks/reducer";
import alertReducer from "./Alert/reducer";
import mangaReducer from "./Manga/reducers";
import chapterReducer from "./Chapters/reducers";
import editReducer from "./Edit/reducer";
import getMyMangas from "./MyMangas/reducer";
import modalDeleteReducer from "./DeleteManga/reducer";
import authorReducer from "./authors/reducer"; //G
import donationReducer from "./Donations/Reducer";
import authorReducer2 from "./Autores/reducer";
import authorReducerG from './Author/reducer'
import companyReducer from "./Company/reducer";
import captureState from "./Capture/reducer";

export const store = configureStore({
        reducer: {
        text: textReducer,
        mangas: mangasReducer, //G
        checks: checkReducer,
        alert: alertReducer,
        manga: mangaReducer,
        chapters: chapterReducer,
        edit: editReducer,
        myMangas: getMyMangas,
        modalDeleteState: modalDeleteReducer,
        author: authorReducer, //G
        autor: authorReducer2,
        donations: donationReducer,
        Author: authorReducerG,
        Company: companyReducer,
        checked: captureState,
},
});
