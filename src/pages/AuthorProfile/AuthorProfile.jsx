import React from 'react'
import './authorProfile.css'
import EditProfile from '../../components/EditProfile/EditProfile'
import Profile from '../../components/Profile/Profile'

export default function Authorprofile() {
    return (
        <>
            <div className='contenedor'>
                <div id='profileBackground'>
                    <h1>Profile</h1>
                </div>
                <div className='sectionProfile'>
                    <EditProfile /> 
                    <Profile/>
                </div>
            </div>
        </>
    )
}