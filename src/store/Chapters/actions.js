import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_chapters = createAsyncThunk(
    'get_chapter',
    async({ inputId, inputPage }) => {
        try {
            let response = await axios.get('http://localhost:8000/chapters/chapters?manga_id='+inputId+'&page='+inputPage)
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

const actions = { get_chapters }
export default actions