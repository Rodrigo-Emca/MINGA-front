import React from 'react'
import './AuthorProfile.css'


export default function AuthorProfile() {
  return (
    <div>
      <div className='author'>
        <div className='author-image'>
          <h2 className='name-page'>Profile</h2>
        </div>
        <div className='card-manga'>
        <form className='FormularioRegistro-m'>
            <h2 className='title-manga'>Author Profile</h2>
            <input  type="text" className='inputs-m' name='x' placeholder='Insert...'/>
            <input  type="text" className='inputs-m' name='x' placeholder='....'/>
            <input  type="text" className='inputs-m' name='x' placeholder='Insert...'/>
            <input  type="text" className='inputs-m' name='x' placeholder='....'/>
            <input  type="text" className='inputs-m' name='x' placeholder='Insert...'/>
            <input  type="text" className='inputs-m' name='x' placeholder='....'/>

            <input type="submit" value="Save" className='SignUpButton-m' />
            <input type="submit" value="Delete" className='SignUpButton-m' />

        </form>
          
        </div>

      </div>
     {/*  <form className='FormularioRegistro-m'>
            <h2 className='title-manga'>Author Profile</h2>
            <input  type="text" className='inputs-m' name='x' placeholder='Insert...'/>
            <input  type="text" className='inputs-m' name='x' placeholder='....'/>
            <input  type="text" className='inputs-m' name='x' placeholder='Insert...'/>
            <input  type="text" className='inputs-m' name='x' placeholder='....'/>
            <input  type="text" className='inputs-m' name='x' placeholder='Insert...'/>
            <input  type="text" className='inputs-m' name='x' placeholder='....'/>

            <input type="submit" value="Save" className='SignUpButton-m' />
            <input type="submit" value="Delete" className='SignUpButton-m' />

        </form> */}
      
    </div>
  )
}
