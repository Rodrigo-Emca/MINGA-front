import { createReducer } from "@reduxjs/toolkit";
import checkActions from './actions'
const {captureChecks} = checkActions

const initiateState= {
    checks: []// EL ESTADO INICIAL ES VACIO
}

const reducer = createReducer(
    initiateState, //1° PARAMETRO ESTADO INICIAL
    (builder) => builder //2° PARAMETRO ES UNA CALLBACK CON CASOS
    .addCase(
        captureChecks,//1° PARAMETRO---->LA ACCION
        (state,action) => { //2°PARAMETRO tiene 2 parametros, 1°state(estado inicial),2°cation
            let newState = {
                ...state,
                checks : action.payload.checks
            }
            return newState
        }
    )
)

export default reducer