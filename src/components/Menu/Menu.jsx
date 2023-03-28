import React from 'react'
import './menu.css'
import { Link as Anchor } from 'react-router-dom'
import LogoutAnchor from '../LogoutAnchor/LogoutAnchor'
import closeImage from '../../images/Close_btn.png'
import BtnRedirect from '../../components/BtnRedirect/BtnRedirect'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../store/Autores/actions'
const {isAuthor} = actions


export default function Menu() {

    const dispatch = useDispatch()
    let author = useSelector(store => store.autor.author)
    console.log(author)
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    useEffect(
        ()=>{
            if(author){
                dispatch(isAuthor())
            }
        },[]
    )

    if (!token) {
        localStorage.setItem('user', JSON.stringify({
            name: "",
            mail: "",
            photo: "",
        }))
    }
    let user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    let name = user.name
    let mail = user.mail
    let photo = user.photo
    return (
        <div>
            {token && author.active ?
                (<div className='MenuNavbar'>
                    <div className='EncabezadoMenu'>
                        <div className='subEncabezado'>
                            <img src={photo} alt="profile_pic" className='profile_pic' />
                            <div className='nameAndMail'>
                                <p>{name}</p>
                                <p>{mail}</p>
                            </div>
                        </div>
                        <img src={closeImage} alt="" />
                    </div>
                    <div className='contenedorAnchors'>
                        <Anchor to='/'>Home</Anchor>
                        <Anchor to='/profile'>Profile</Anchor>
                        <Anchor to='/mangas-form'>Mangas Form</Anchor>
                        <Anchor to='/myMangas/1'>My Mangas</Anchor>
                        <LogoutAnchor />
                    </div>
                </div>
                ):
                    token ? (<div className='MenuNavbar'>
                <div className='EncabezadoMenu2'>
                    <div className='subEncabezado2'>
                        <p>M I N G A</p>
                        <img src={closeImage} alt="" />
                    </div>
                    <div className='contenedorAnchors'>
                        <Anchor to='/  '>Home</Anchor>
                        <Anchor to='/mangas/0'>Mangas</Anchor>
                        <LogoutAnchor />
                    </div>
                </div>
            </div>
            ) : (<div className='MenuNavbar'>
                    <div className='EncabezadoMenu2'>
                        <div className='subEncabezado2'>
                            <p>M I N G A</p>
                            <img src={closeImage} alt="" />
                        </div>
                        <div className='contenedorAnchors'>
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
