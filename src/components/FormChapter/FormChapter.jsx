import React from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './FormChapter.css'
import Swal from 'sweetalert2'

export default function FormChapter() {
    let title = useRef()
    let order = useRef()
    let pages = useRef()
    let {manga_id} = useParams()


    async function haddleSubmit(e){
        e.preventDefault()
        
        let chapter = {
            manga_id ,
            [title.current.name]: title.current.value,
            [pages.current.name]: pages.current.value,
        };

        if (order.current.value) {
            chapter[order.current.name] = order.current.value
        }
        console.log(chapter)
        let url = 'http://localhost:8000/chapters'
        let token = localStorage.getItem('token')
        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        try{
            await axios.post(url, chapter, headers)
            Swal.fire({
                icon: 'success',
                title: 'EXITO',
                text: 'Capítulo creado correctamente',
            })
        }
        catch(err){
            console.log(err)
            let error = err.response.data.message
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: error,
            })
        }
        e.target.reset()
    }
    return (
    <div className='content-form'>
        <h2>New Chapter</h2>
        <form onSubmit={haddleSubmit}>
            <fieldset>
                <input type="text" placeholder='Insert title' id='title' name='title' ref={title} required/>
            </fieldset>
            <fieldset>
                <input type="number" placeholder='Insert order' id='order' name='order' ref={order}/>
            </fieldset>
            <fieldset>
                <input type="text" placeholder='Insert pages' id='page' name='pages' ref={pages} required/>
            </fieldset>
            <button className='btn-chapter' type='submit'>Send</button>
        </form>
    </div>
)
}
