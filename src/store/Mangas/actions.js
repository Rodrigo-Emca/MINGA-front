import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const read_mangas = createAsyncThunk(
    'read_mangas',
    async({inputText,inputCheck,inputPage}) => {
        let url = `http://localhost:8000/mangas/read?page=${inputPage}&title=${inputText.trim()}&category_id=${inputCheck.join()}`
        try{
            let response = await axios.get(url)
            return{
                mangas: response.data.mangas
            }
        }catch(error){
            return{
                mangas: []
            }
        }
    }
)

const actions = {read_mangas}

export default actions