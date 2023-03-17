import React from 'react';
import {Link as Anchor} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


function LogoutAnchor() {

    async function handleLogout(){
        let token = localStorage.getItem('token')
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        let url = 'http://localhost:8000/auth/signout'
        let urlToken = 'http://localhost:8000/auth/token'
        
        try {
            await axios.post(urlToken,"",headers)
            //console.log('header enviado con exito')
            } catch (error) {
            console.log(error)
            }
        
        try{
            await axios.post(url,"",headers)
            Swal.fire({
                    icon: 'success',
                    // title: '¡Hasta pronto!',
                    text: '¡Usuario offline!'
                })
            localStorage.setItem('token', "")
            localStorage.setItem('user', "")
        }catch(error){
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
        <Anchor onClick={handleLogout}>Logout</Anchor>
    );
}

export default LogoutAnchor;