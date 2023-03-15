import { createAction } from "@reduxjs/toolkit"

let capture = createAction( //llama al metodo createAction, que recibe 2 parametros
    'capture',//1° parametro nombre de la accion
    ({ text })=> { return { payload: { text } }}//2° parametro funcion, que toma el texto, ver el form input ref={text}
)                  //retorna el payload como un objeto que es el texto que ingreso el usuario

const textActions = { capture }// crea una variable donde guarda como objeto la variable que tiene el metodo createAction
export default textActions//exporta la variable

//2° parametro funcion, que toma el texto
/* 
<form className='form' >                 /ref={text}/
    <input className="input" type="text" ref={text} defaultValue={defaultText} name="text" id="text" placeholder='Find your manga here' onChange={hadleChange} />
</form>

*/