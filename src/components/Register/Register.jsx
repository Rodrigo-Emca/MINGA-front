import React from 'react'
import './register.css'
import FormularioRegistro from '../FormularioRegistro/FormularioRegistro';
import FormularioEncabezado from '../FormularioEncabezado/FormularioEncabezado';
import FormularioBase from '../FormularioBase/FormularioBase';


import imagenRegistro from '../../images/imagenRegister.svg'


export default function Register() {
    return (
    <div className="RegisterContainerGeneral">
        <div className='Register'>
            <div className='ContainerFormulario'>
                <FormularioEncabezado/>
                <FormularioRegistro/>
                <FormularioBase/>
            </div>
        </div>
        <div className='ImagenRegister'>
            <img src={imagenRegistro} alt="imagenRegistro" className='imagenTotoro'/>
        </div>
    </div>
)
}
