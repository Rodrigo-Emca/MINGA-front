import { createReducer } from "@reduxjs/toolkit";
import Authors from "./actions.js";

const { isAuthor } = Authors

const initialState ={
    author: [],
}

const authorReducer2 = createReducer(
    initialState,
    (builder)=> builder
    .addCase(
        isAuthor.fulfilled,
        (state,actions)=>{
            let newState ={
                ...state,
                author: actions.payload.author
            }
            return newState
        }
    )
)

export default authorReducer2