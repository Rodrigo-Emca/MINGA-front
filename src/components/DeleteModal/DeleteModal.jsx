import React from 'react';
//import Modal from 'react-modal';
import axios from 'axios';
import Swal from 'sweetalert2'

const DeleteModal = ({ modalIsOpen, setModalIsOpen, handleDelete }) => {
    
    return (

        {/* <Modal isOpen={modalIsOpen} className='modalDeConfirmaciónDelete' onRequestClose={() => setModalIsOpen(false)}>
            <div className='innerModal'>
                <div className='textModal'>
                <p>Are you sure you want to DELETE this manga?</p>
                </div>
                <div className='modalButtons'>
                <button className='botonModalYES' onClick={handleDelete}>YES, I'm sure</button>
                <button className='botonModalNO' onClick={() => setModalIsOpen(false)}>NO</button>
                </div>
            </div>
        </Modal> */}
        
    );
};

export default DeleteModal;