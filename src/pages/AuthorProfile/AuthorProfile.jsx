import React from 'react'
import './authorProfile.css'
import EditProfile from '../../components/EditProfile/EditProfile'
import Profile from '../../components/Profile/Profile'
import axios from "axios";
import BtnRedirect from '../../components/BtnRedirect/BtnRedirect'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../store/Autores/actions'
import { Link as Anchor } from 'react-router-dom'
import rectangle from "../../images/Rectangle 10 (1).png";
const {isAuthor} = actions

export default function Authorprofile() {
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

    return (
       /*  token && author?.active ? */
       token && author?.active ?
            <div className='contenedor'>
                <div id='profileBackground'>
                    <h1>Profile</h1>
                </div>
                <div className='sectionProfile'>
                    <EditProfile /> 
                    <Profile/>
                </div>
            </div> : <BtnRedirect/>
    )
}