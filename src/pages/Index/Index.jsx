import React from 'react'
import './index.css'

import Hero from '../Hero/Hero'
import AuthForm from '../../components/AuthForm/AuthForm'

export default function Index() {
    return (
        <div>
            <Hero/>
            <AuthForm/>
        </div>
    )
}