import { createReducer } from "@reduxjs/toolkit";
import modalActions from './actions'

const { deleteManga } = modalActions

const initialState = {
    id: ""
}

const modalReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            deleteManga.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    id: action.payload.id
                }
                return newState
            }
        )
)

export default modalReducer