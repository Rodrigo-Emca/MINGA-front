import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Swal from 'sweetalert2'
import './myMangaCards.css';
import { useParams,Link as Anchor,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import deleteManga from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import imagenMas from '../../images/suma.png';
import imagenLapiz from '../../images/lapiz.png';

export default function MangaCard(props) {
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const {reload, setReload} = props
    // const [reload, setReload] = useState(false);

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function handleNavegate() {
        navigate(`/manga/${props._id}/1`);
    }

    const handleEditModal = () => {
        setEditModalIsOpen(true);
    }

    let title = useRef()
    let description = useRef()
    let category_id = useRef()
    let cover_photo = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
    
        let data = {}
        if (title.current.value) {
            data[title.current.name] = title.current.value
        }
        if (description.current.value) {
            data[description.current.name] = description.current.value
        }
        if (cover_photo.current.value) {
            data[cover_photo.current.name] = cover_photo.current.value
        }
        
        if (Object.keys(data).length === 0) {
            Swal.fire({
                icon: 'error',
                title: '¡Lo sentimos!',
                text: 'Debes proporcionar al menos una propiedad con contenido'
            })
            return
        }
    
        let token = localStorage.getItem('token');
        let urlEdit = 'https://minga-back-446z.onrender.com/mangas/'+`${props._id}`;
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };
        try {
            await axios.put(urlEdit, data, headers)
            await Swal.fire({
                icon: 'success',
                title: 'ÉXITO',
                text: 'Manga editado correctamente'
            })
            setReload(!reload)
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
    

    async function handleDelete() {
        let token = localStorage.getItem('token');
        let urlDelete = 'https://minga-back-446z.onrender.com/mangas/'+`${props._id}`;
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };
        try {
            await axios.delete(urlDelete, headers);
            await Swal.fire({
                icon: 'success',
                title: 'ÉXITO',
                text: 'Manga deleted correctly'
            });
            setReload(!reload)
            } catch(error) {
            let err = error.response.data.message;
            console.log('Ocurrió un error');
            await Swal.fire({
                icon: 'error',
                title: 'Oops, there is a problemm!',
                text: err
            });
            }
        }

    return (
        <div className='card-container'>
        <span
            className={`span-card ${
            props.category_.name.includes('shonen')
                ? 'red-span'
                : props.category_.name.includes('comic')
                ? 'orange-span'
                : props.category_.name.includes('shojo')
                ? 'green-span'
                : props.category_.name.includes('seinen')
                ? 'purple-span'
                : ''
            }`}
        ></span>
        <div className='inf-card'>
            <div className='contenedorMiniBottons'>
                <Anchor to={'/chapter-form/'+`${props._id}`}  onClick={handleNavegate} className='btn-card-mini'><img src={imagenMas} alt='' /></Anchor>
                <Anchor to={'/edit/'+`${props._id}`}  onClick={handleNavegate} className='btn-card-mini'><img src={imagenLapiz} alt='' /></Anchor>
            </div>
            <h2 className='title-card'>{props.title_}</h2>
            <h3 className='category-card'>{props.category_.name}</h3>
            <div className='contenedorBottons'>
            <button onClick={handleEditModal} className='btn-card-editar'>
            Editar
            </button>
            <button onClick={() => setDeleteModalIsOpen(true)} className='btn-card-eliminar'>
                Eliminar
            </button>
            </div>
        </div>
        <img className='img-card' src={props.photo} alt='mangaImage' />

            <Modal isOpen={deleteModalIsOpen} className='modalDeConfirmaciónDelete' onRequestClose={() => setDeleteModalIsOpen(false)} ariaHideApp={false}>
                <div className='innerModal'>
                    <div className='textModal'>
                        <p>Are you sure you want to DELETE this manga?</p>
                    </div>
                    <div className='modalButtons'>
                        <button className='botonModalYES' onClick={handleDelete}>YES, I'm sure</button>
                        <button className='botonModalNO' onClick={() => setDeleteModalIsOpen(false)}>NO</button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={editModalIsOpen} className='modalEDITE' onRequestClose={() => setEditModalIsOpen(false)} ariaHideApp={false}>
             
                <form className='FormularioRegistro' onSubmit={handleSubmit} >
                    <fieldset className='innerFormulario'>
                        <legend>Title</legend>
                            <input ref={title} type="text" className='inputsEdit' name='title' placeholder={props.title_}/>
                    </fieldset>

                    <fieldset className='innerFormulario'>
                        <legend>Description</legend>
                            <input ref={description} type="text" className='inputsEdit' name='description' placeholder='Write here the new description'/>
                    </fieldset>

                   

                    <fieldset className='innerFormulario'>
                        <legend>Cover_photo</legend>
                            <input ref={cover_photo} type="url" className='inputsEdit' name='cover_photo' placeholder='URL'/>
                    </fieldset>
                        

                    <input type="submit" value="Save Changes" className='SignUpButton' onSubmit={handleSubmit}/>

                    <button className='botonModalCANCEL' onClick={() => setEditModalIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
}
