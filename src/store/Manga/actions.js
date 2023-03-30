import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_manga = createAsyncThunk(
    'get_manga',
    async({ inputId }) => {
        try {
            let response = await axios.get(`https://minga-back-446z.onrender.com/mangas/${inputId}`)
            return {
                manga: response.data.mangas
            }
        } catch (error) {
            console.log('No se ha podido traer el pedido')
            return {
                manga: []
            }
        }
    }
)

const actions = { get_manga }
export default actions