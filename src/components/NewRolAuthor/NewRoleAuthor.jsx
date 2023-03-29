import React from 'react'
import './newRoleAuthor.css'
import ellipse3 from '../../images/Ellipse 3.png'
import ellipse4 from '../../images/Ellipse 4.png'
import ellipse5 from '../../images/Ellipse 5.png'
import { Link as Anchor } from 'react-router-dom'

export default function NewRoleAuthor() {
    return (
        <>
            <Anchor to={'/author-form'} className='text-author'>
                <div className='cont-author'>
                    <div className='profiles'>
                        <img id='img-profile' src={ellipse3} alt='img' />
                        <img id='img-profile' src={ellipse4} alt='img' />
                        <img id='img-profile' src={ellipse5} alt='img' />
                    </div>

                    <div className='selec-author'>
                        <h3 >Join as an Author!</h3>
                        <p>I'm a reader writting a manga</p>
                    </div>
                </div>
            </Anchor>
        </>
    )
}