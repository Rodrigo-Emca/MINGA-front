import React from 'react'
import './IndexLayout.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

export default function IndexLayout(props) {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
