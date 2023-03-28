import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const isAutor = createAsyncThunk(
    'isAuthor',
    async()=>{
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'http://localhost:8000/authors/me'
        try{
            let response = await axios.get(url,headers)
            return{
                author: response.data.author
            }
        }catch(error){
            return{
                author: []
            }
    }
})

const actions = { isAutor }

export default actions