import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './chapterDetails.css'
import Arrowr from '../../images/Arrowr.svg'
import Arrowl from '../../images/Arrowl.svg'
import comentarios from '../../images/comentarios.svg'

export default function ChapterDetails() {
    let navigate = useNavigate()
    let { id, page } = useParams()
    let url = `http://localhost:8000/chapters/`
    let [Chapter, setChapter] = useState({})
    let [index, setIndex] = useState(Number(page))
    let [next, setNext] = useState('')
    let [prev, setPrev] = useState('')

    useEffect(() => {
        axios.get(url + id).then(res => {
            setChapter(res.data.chapter);
            setIndex(Number(page))
            setNext(res.data.next)
            setPrev(res.data.prev);
        }).catch(error => console.log(error));
    }, []);

    
    function handlePrev(e) {
        setIndex(index - 1);
        navigate(`/chapters/${id}/${index - 1}`);

        if ((index <= 0) && (Chapter.order === 1)) {
            navigate('/mangas/:page');
        }else if (index <= 0){
            navigate(`/chapters/${prev}/0`)
            window.location.reload(true)
        }
    }


    function handleNext(e) {
        setIndex(index + 1)
        navigate(`/chapters/${id}/${index + 1}`)
        if (index >= Chapter.pages.length - 1) {
            navigate(`/chapters/${next}/0`)
            window.location.reload(true)
        }
    }

    return (
        <div className='div-chapter'>
            <div className='chapter'>
                <p className='parrafo-chapter'> Capítulo {Chapter.order}, {Chapter.title} </p>
            </div>
            <div className='btnArrow btnNext' onClick={handleNext}>
                <img src={Arrowr} alt='arrowr' />
            </div>
            <div className='btnArrow btnPrev' onClick={handlePrev}>
                <img src={Arrowl} alt='arrowl' />
            </div>
            <div className='div-page'>
                <img src={Chapter?.pages?.[page]} alt="" />
            </div>
            <div className='div-comentario'>
                <img src={comentarios} alt='icono-comentarios' />
            </div>
        </div>
    )
}

