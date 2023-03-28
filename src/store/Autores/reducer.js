import { createReducer } from "@reduxjs/toolkit";
import Autors from "./actions.js";

const { isAutor } = Autors

const initialState ={
    author: [],
}

const autorReducer = createReducer(
    initialState,
    (builder)=> builder
    .addCase(
        isAutor.fulfilled,
        (state,actions)=>{
            let newState ={
                ...state,
                author: actions.payload.author
            }
            return newState
        }
    )
)

export default autorReducer