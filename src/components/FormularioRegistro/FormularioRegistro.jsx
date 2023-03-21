import {useRef} from 'react'
import './formularioRegistro.css'
import axios from 'axios'

import Swal from 'sweetalert2'
import imgGoogle from '../../images/Google.png'
import profileIcon from '../../images/profile.png'
import emailIcon from '../../images/@.png'
import cameraIcon from '../../images/camera.png'
import passwordIcon from '../../images/lock1.png'

export default function FormularioRegistro() {

    let name = useRef()
    let mail = useRef()
    let photo = useRef()
    let password = useRef()

async function handleSubmit(event) {
        event.preventDefault()

        let data = {
            [name.current.name]: name.current.value,
            [mail.current.name]: mail.current.value,
            [photo.current.name]: photo.current.value,
            [password.current.name]: password.current.value
        }
        console.log(data)
        let url = 'http://localhost:8000/auth/signup'
        try {
            await axios.post(url, data)
            Swal.fire({
                icon: 'success',
                title: 'ÉXITO',
                text: 'Usuario creado correctamente'
            })
        } catch(error) {
            let err = error.response.data.message
            console.log('Ocurrió un error')
            Swal.fire({
                icon: 'error',
                title: '¡Lo sentimos!',
                text: err
            })
        }
    }

    return (
    <form className='FormularioRegistro' onSubmit={handleSubmit}>
        <fieldset className='innerFormulario'>
            <legend>Name</legend>
                <input ref={name} type="text" className='inputs' name='name' required/>
                <img src={profileIcon} alt="profileIcon" className='icon'/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Email</legend>
                <input ref={mail} type="email" className='inputs' name='mail' required/>
                <img src={emailIcon} alt="emailIcon" className='icon'/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Photo</legend>
                <input ref={photo} type="url" className='inputs' name='photo' required/>
                <img src={cameraIcon} alt="photoIcon" className='icon'/>
        </fieldset>
            
        <fieldset className='innerFormulario'>
            <legend>Password</legend>
                <input ref={password} type="password" className='inputs' name='password' required/>
                <img src={passwordIcon} alt="passwordIcon" className='icon'/>
        </fieldset>

        <label className='pSendNotif'>
        <input type="checkbox"  className='checkSendNotif'/>
            Send me a notification to my email
            </label>
        <input type="submit" value="Sign up" className='SignUpButton'/>
        <button type='button' className='buttonSignGoogle'>
            <img src={imgGoogle} alt="" />
            <p className='pGoogle'>Sign with Google</p>
        </button>
    </form>
)
}