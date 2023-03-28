import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormEdit from '../../components/FormEdit/FormEdit'

export default function EditChapter() {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    const dispatch = useDispatch()
    let author = useSelector(store=> store)
    console.log(author)
    return (
        <div>
            <FormEdit />
        </div>
)
}
