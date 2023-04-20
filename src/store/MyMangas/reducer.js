import { createReducer } from "@reduxjs/toolkit";
import myMangaAction from './actions'

const {my_mangas} = myMangaAction

const initialState ={
    mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        my_mangas.fulfilled,
        (state,actions)=>{
            let newState = {
                ...state,
                mangas: actions.payload.mangas
            }
            return newState
        }
    )
)

export default reducer