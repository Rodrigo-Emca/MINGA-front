import React from 'react'
import './signin.css'
import FormularioSignIn from '../../components/FormularioSignIn/FormularioSignIn';

import imagenSignIn from '../../images/SignIn.png'
import LogoMain from '../../images/Logo Dos.png';
import {Link as Anchor} from 'react-router-dom'

export default function SignIn() {
    return (
    <div className="RegisterContainerGeneral">
        <div className='ImagenRegister'>
            <img src={imagenSignIn} alt="imagenRegistro" className='imagenTotoro'/>
        </div>
        <div className='Register'>
            <div className='ContainerFormulario'>
                <div className='EncabezadoFormulario'>
                    <img src={LogoMain} alt="" className='logoFormulario'/>
                    <p className='titleg'>Welcome back!</p>
                    <p className='titleh'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                </div>
                <FormularioSignIn/>
                <div>
                    <div className='FormularioBase'>
                        <p className='pAlredyAccount'>You don´t have an account? 
                        <Anchor to='/signup'>Sign up</Anchor>
                        </p>
                    </div>
                    <div className='FormularioBase'>
                        <p className='pAlredyAccount'>Go back to <Anchor to='../'>home page</Anchor></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}