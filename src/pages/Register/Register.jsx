import React from 'react'
import './register.css'
import FormularioRegistro from '../../components/FormularioRegistro/FormularioRegistro';
import FormularioEncabezado from '../../components/FormularioEncabezado/FormularioEncabezado';

import imagenRegistro from '../../images/imagenRegister.svg'
import {Link as Anchor} from 'react-router-dom'

export default function Register() {
    return (
    <div className="RegisterContainerGeneral">
        <div className='Register'>
            <div className='ContainerFormulario'>
                <FormularioEncabezado/>
                <FormularioRegistro/>
                {/* <FormularioBase/> */}
                <div>
                    <div className='FormularioBase'>
                        <p className='pAlredyAccount'>Already have an account? <Anchor to='/signin'>Log in</Anchor></p>
                    </div>
                    <div className='FormularioBase'>
                        <p className='pAlredyAccount'>Go back to <Anchor to='../'>home page</Anchor></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='ImagenRegister'>
            <img src={imagenRegistro} alt="imagenRegistro" className='imagenTotoro'/>
        </div>
    </div>
)
}
