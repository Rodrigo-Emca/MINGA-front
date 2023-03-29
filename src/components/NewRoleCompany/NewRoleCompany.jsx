import React from 'react'
import './newRoleCompany.css'
import ellipse3 from '../../images/Ellipse 3.png'
import ellipse4 from '../../images/Ellipse 4.png'
import ellipse5 from '../../images/Ellipse 5.png'
import { Link as Anchor } from 'react-router-dom'


export default function NewRoleCompany() {
    return (
        <>
            <Anchor to={'/create-company'}className='text-author'>
                <div className='cont-company'>
                    <div className='profiles'>
                        <img id='img-profile' src={ellipse3} alt='img'/>
                        <img id='img-profile' src={ellipse4} alt= 'img'/>
                        <img id='img-profile' src={ellipse5} alt= 'img'/>
                    </div>
                    <div className='selec-company'>
                        <h3>Join as an Company!</h3>
                        <p>I'm a company and I want to publish my comics</p>
                    </div>

                </div>
            </Anchor>
        </>
    )
}