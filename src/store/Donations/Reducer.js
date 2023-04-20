import { createReducer } from "@reduxjs/toolkit";
import donationAction from './Actions.js'

const {getDonations} = donationAction

const initialState ={
    getDonations: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        getDonations.fulfilled,
        (state,actions)=>{
            let newState = {
                ...state,
                getDonations: actions.payload.donations
            }
            return newState
        }
    )
)

export default reducer