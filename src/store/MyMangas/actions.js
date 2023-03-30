import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const my_mangas = createAsyncThunk(
    'my_mangas',
    async ({ token }) => {
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        try{
            let response = await axios.get("https://minga-back-446z.onrender.com/mangas/me" , headers)
            return { mangas: response.data.mangas}
        }catch(error){
            return{
                myMangas: []
            }
        }
    }
)

const actions = {my_mangas}
export default actions