import React from 'react'
import './btnredirect.css'
import { Link as Anchor } from 'react-router-dom'

export default function BtnRedirect() {
    return (
        <div className='page-btn'>
            <button className='btn-redirect' >
                <Anchor className='anchor' to='/'>You must log in as author</Anchor>
            </button>
        </div>
)
}