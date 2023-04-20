import { createReducer } from "@reduxjs/toolkit";
import edit from "./actions";

const { editChapter, deleteChapter } = edit

const initialState = {
    chapters: []
}

const editReducer = createReducer(
    initialState,
    (builder)=> builder
            .addCase(
                editChapter.fulfilled,
                (state, action)=>{
                    console.log(action.payload)
                    let newState={
                        ...state,
                        chapters: action.payload.chapter
                    }
                    return newState
                }
            )
            .addCase(
                deleteChapter.fulfilled,
                (state, action)=>{
                    let newState = {
                        ...state,
                        chapters: action.payload.chapters
                    }
                    return newState
                }
            )
)

export default editReducer