import { useRef } from 'react'
import './formManga.css'
import Select from '../Select/Select'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function FormManga() {
    let title = useRef()
    let description = useRef()
    let category = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(category)

        let data = {

            [title.current.name]: title.current.value,
            [description.current.name]: description.current.value,
            [category.current.name]: category.current.value
        }
        console.log(data)
        let url = 'http://localhost:8000/mangas/'
        try {
            await axios.post(url, data)

            Swal.fire({
                icon: 'success',
                title: 'Ok!',
                text: 'creaste un nuevo MANGA!'
            })

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'no se puedo crear el manga',
            })
        }
    }

    return (
        <form className='FormularioRegistro-m' onSubmit={handleSubmit}>
            <h2 className='title-manga'>New Manga</h2>
            <input ref={title} type="text" className='inputs-m' name='title' placeholder='Insert title' required />
            <Select parentRef={category} name="category" />
            <input ref={description} type="text" className='inputs-m' name='description' placeholder='Insert description' required />
            <input type="submit" value="Send" className='SignUpButton-m' />

        </form>
    )
}

