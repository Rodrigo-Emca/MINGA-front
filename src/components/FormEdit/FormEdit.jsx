import React from 'react'
import './formEdit.css'
import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import edit from '../../store/Edit/actions'
import actions from '../../store/Chapters/actions'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const { get_chapters } = actions
const { editChapter, deleteChapter } = edit

// 640a29dfaa914d6b7c58481e

export default function FormEdit() {
    let dispatch = useDispatch()
    let { manga_id } = useParams()
    let { _id } = useParams()
    let select = useRef()
    let chapter = useRef()
    let modif = useRef()
    let editDate = useRef()
    chapter = useSelector(store => store.chapters.chapter)
    console.log(chapter)
    // let url = `https://minga-back-446z.onrender.com/chapters?manga_id=${manga_id}&quantity=${0}`
    let url2 = `https://minga-back-446z.onrender.com/mangas/${manga_id}`
    let [chapters, setChapter] = useState({})
    let [cover_photo, setCover_photo] = useState({})
    let [order, setOrder] = useState(chapter?.[0]._id)
    let [newOrder, setNewOrder] = useState()
    let [reload, setReload] = useState(false)
    useEffect(
        () => {
            dispatch(get_chapters({
                inputId: manga_id,
                quantity: 0
            }))
            // axios.get(url)
            // .then(res =>{
            //     // setChapter(res.data.chapters)
            //     // console.log(res.data.chapters)
            // })
            // .catch(error => console.log(error))

            axios.get(url2)
                .then(res => {
                    setCover_photo(res.data.mangas)
                    console.log(res.data.mangas)
                })
                .catch(error => console.log(error))
        }, [reload]
    )

    useEffect(
        () => {
            axios.get('https://minga-back-446z.onrender.com/chapters/' + order)
                .then(res => setNewOrder(res.data.chapter))
                .catch(error => console.log(error))
        }, [reload]
    )
    let userse = useSelector(store => store)
    console.log(userse)

    function handleEdit(e) {
        e.preventDefault()

        let data = {
            chapter: select.current.value,
            mod: modif.current.value,
            editDate: editDate.current.value
        }
        dispatch(editChapter({
            data: { [data.mod]: data.editDate },
            chapter_id: data.chapter
        }))
        e.target.reset()
        Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'It\'s chapter has been successfully modified',})
        setReload(!reload)
    }

    function handleChange(e) {
        setOrder(e.target.value)
        setReload(!reload)
    }

    async function handleDelete(e) {
        e.preventDefault();
        try {
            dispatch(deleteChapter({chapter_id: order}))
            dispatch(get_chapters({
                inputId: manga_id,
                quantity: 0
            }))
            Swal.fire({
                icon: 'success',
                title: 'success',
                text: 'Your chapter has been successfully removed',})
            setReload(!reload)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(order)
    return (
        <div className='edit'>
            <div className='edit-form'>
                <h2 className='title-ed'>Edit Chapter</h2>
                <form onSubmit={handleEdit}>
                    <fieldset className='form-ed'>
                        <select name='selectchapter' id='selectchapter' ref={select} onChange={handleChange}>
                            <option value="#">Select</option>
                            {chapter?.map(chapter => (
                                <option key={chapter.title} value={chapter?._id}>{chapter?.order}</option>
                            ))}
                        </select>
                        <select name="chapter" id="chapter" ref={modif}>
                            <option value="title">title</option>
                            <option value="order">order</option>
                            <option value="pages">pages</option>
                        </select>
                        <input type="text" placeholder='data to edit' ref={editDate} />
                    </fieldset>
                    <button className='btn-edit'>Edit</button>
                </form>
                <button className='btn-del' onClick={handleDelete}>delete</button>
            </div>
            <div className='div-naruto'>
                <h2>{newOrder?.title}</h2>
                <img className='img-naruto' src={cover_photo?.cover_photo} alt={cover_photo?.title} />
            </div>
        </div>
    )
}
