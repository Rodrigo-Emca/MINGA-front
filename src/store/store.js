import {configureStore} from "@reduxjs/toolkit";

import authorReducer from "./Author/reducer";
import mangasReducer from "./Mangas/reducer";

export const store = configureStore({
  reducer: {
    author: authorReducer,
    mangas: mangasReducer,
  },
});
