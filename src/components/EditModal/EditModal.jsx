import {useRef, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function EditModal(props) {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const handleEditModal = () => {
        setEditModalIsOpen(true);
    }
    
    let title = useRef()
    let description = useRef()
    let category = useRef()
    let cover_photo = useRef()

async function handleSubmit(event) {
        event.preventDefault()

        let data = {
            [title.current.name]: title.current.value,
            [description.current.name]: description.current.value,
            [category.current.name]: category.current.value,
            [cover_photo.current.name]: cover_photo.current.value
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
        <form className='FormularioRegistro' >
        <fieldset className='innerFormulario'>
            <legend>Title</legend>
                <input ref={title} type="text" className='inputs' name='title' placeholder={props.title_}/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Description</legend>
                <input ref={description} type="text" className='inputs' name='description' placeholder={props.description_}/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Category</legend>
                <input ref={category} type="text" className='inputs' name='category' placeholder={props.category_.name}/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Cover_photo</legend>
                <input ref={cover_photo} type="url" className='inputs' name='photo'/>
        </fieldset>
            

        <input type="submit" value="Save Changes" className='SignUpButton' onSubmit={handleSubmit}/>

        <button className='botonModalCANCEL' onClick={() => setEditModalIsOpen(false)}>Cancel</button>
    </form>
)
}
