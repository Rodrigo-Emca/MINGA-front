import React from 'react'
import './footer.css'

import Donations from '../Donations/Donations'
import logoMinga from '../../images/logo_dos.svg'
import facebook from '../../images/Facebook.png'
import twitter from '../../images/Twitter.png'
import union from '../../images/Union.png'
import youtube from '../../images/Youtube.png'
import vimeo from '../../images/Vimeo.png'

import {Link as Anchor} from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='Img-box'>
      </div>
      <div className='text-foot'>
          <p>Subscribe</p>
          <div className='register-foot'>
              <input type="text" placeholder='Enter your email' />
              <button>Subscribe Now</button>
          </div>
      </div>
      <div className='foot-final'>
          <div className='links'>
            <Anchor to='/'>Home</Anchor>
            <Anchor to='/'>Manga</Anchor>
          </div>
          <img src={logoMinga} alt="logoMinga" className='logoMinga'/>
          <div className='btn-f'>
              <div className='socialIcons'>
                <Anchor to='https://www.facebook.com/'><img src={facebook} alt="facebook" /></Anchor>
                <Anchor to='https://twitter.com/'><img src={twitter} alt="twitter" /></Anchor>
                <Anchor to='https://www.vimeo.com/'><img src={vimeo} alt="vimeo" /></Anchor>
                <Anchor to='https://www.youtube.com/'><img src={youtube} alt="youtube" /></Anchor>
              </div>
              <Donations/>
          </div>
      </div>
  </div>
  )
}
