import { createReducer } from "@reduxjs/toolkit"//1° importa el create reducer
import textActions from "./actions" //2° importa la accion

const { capture } = textActions //3° desestructura la accion

const initialState = {
    text: '' //EL ESTADO INICIAL ES UN TEXTO VACIO, INPUT DEL BUSCADOR VACIO
}

let alertReducer = createReducer( //variable que llama al metodo createReducer
    initialState,                //1° parametro es el estado inicial, que es un string vacio ver mas arriba
    (builder) => builder        //2° parametro funcion constructora, de estados, x convencion llamada bilder
        .addCase(              //se le define un estado
            capture,           //1° parametro es la accion
            (state,action) => {//2° parametro es una funcion, que recibe el estado inicial y una accion, qie es el payload
                //action.payload.text = action.payload.text.trim()
                let newState = {
                    ...state,//hace copia del estado anterior, el estado inicial
                    text: action.payload.text.trim()
                }
                return newState
            }
        )
)

export default alertReducer