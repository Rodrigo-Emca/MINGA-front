import React from 'react'
import './menu.css'
import { Link as Anchor } from 'react-router-dom'
import LogoutAnchor from '../LogoutAnchor/LogoutAnchor'
import closeImage from '../../images/Close_btn.png'

export default function Menu() {

    let token = localStorage.getItem('token')
    if (!token) {
        localStorage.setItem('user', JSON.stringify({
            name: "",
            email: "",
            photo: "",
        }))
    }
    let user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    let name = user.name
    let email = user.email
    let photo = user.photo

    return (
        <div>
            {token ?
                (<div className='MenuNavbar'>
                    <div className='EncabezadoMenu'>
                        <div className='subEncabezado'>
                            <img src={photo} alt="profile_pic" className='profile_pic' />
                            <div className='nameAndMail'>
                                <p>{name}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                        <img src={closeImage} alt="" />
                    </div>
                    <div className='contenedorAnchors'>
                        <Anchor to='/'>Home</Anchor>
                        <Anchor to='/'>Comics</Anchor>
                        <Anchor to='/'>My Comics</Anchor>
                        <Anchor to='/'>Favourires</Anchor>
                        <Anchor to='/chapter-form/:manga_id'>Chapter</Anchor>
                        <LogoutAnchor />
                    </div>
                </div>
                )
                : (<div className='MenuNavbar'>
                    <div className='EncabezadoMenu2'>
                        <div className='subEncabezado2'>
                            <p>M I N G A</p>
                            <img src={closeImage} alt="" />
                        </div>
                        <div className='contenedorAnchors'>
                            <Anchor to='/'>Read</Anchor>
                            <Anchor to='/signup'>Register</Anchor>
                            <Anchor to='/signin'>Login</Anchor>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}
