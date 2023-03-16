import { createReducer } from "@reduxjs/toolkit";
import mangasActions from './actions'

const {read_mangas} = mangasActions

const initialState ={
    mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        read_mangas.fulfilled,
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

