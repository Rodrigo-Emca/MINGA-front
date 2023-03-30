import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const isAuthor = createAsyncThunk(
    'isAuthor',
    async()=>{
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'https://minga-back-446z.onrender.com/authors/me'
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

const actions = { isAuthor }

export default actions