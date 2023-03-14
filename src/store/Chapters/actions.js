import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_chapter = createAsyncThunk(
    'get_chapter',
    async({ inputId }) => {
        try {
            let response = await axios.get('http://localhost:8000/chapters/chapters?manga_id='+inputId)
            return {
                chapters: response.data.chapters
            }
        } catch (error) {
            console.log('No se ha podido traer el pedido')
            return {
                chapters: []
            }
        }
    }
)

const actions = { get_chapter }
export default actions