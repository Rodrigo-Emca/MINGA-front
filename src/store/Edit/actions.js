import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editChapter = createAsyncThunk(
    'editChapter',
    async({ chapter_id, data })=>{
        console.log(data)
        let token = localStorage.getItem('token')
        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        try{
            let res = await axios.put('https://minga-back-446z.onrender.com/chapters/' + chapter_id, data, headers)
            console.log(res)
            return { chapter: res.data.upd }
        }
        catch(error){
            console.log(error)
            return {chapters: []}
        }
    }
)

const deleteChapter = createAsyncThunk(
    'deleteChapter',
    async({ chapter_id })=>{
        let token = localStorage.getItem('token')
        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        try{
            let res = await axios.delete('https://minga-back-446z.onrender.com/chapters/' + chapter_id, headers)
            return {delete: 'Delete'}  
        }
        catch(error){
            return {chapters: []}
        }
    }
)

let edit = {editChapter, deleteChapter}
export default edit