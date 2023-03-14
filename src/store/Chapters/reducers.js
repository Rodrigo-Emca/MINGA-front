import { createReducer } from "@reduxjs/toolkit";
import chapterActions from './actions'
const { get_chapter } = chapterActions

const initialState = {
    chapter: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_chapter.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapter: action.payload.chapters
                }
                return newState
            }
        )
)

export default reducer