import { createReducer } from "@reduxjs/toolkit";
import mangaActions from './actions'
const { get_manga } = mangaActions

const initialState = {
    manga: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_manga.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    manga: action.payload.manga
                }
                return newState
            }
        )
)

export default reducer