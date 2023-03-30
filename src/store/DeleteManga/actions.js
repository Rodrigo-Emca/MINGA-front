import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteManga = createAsyncThunk(
    'deleteManga',
    async (id, token) => {
        let urlDelete = `https://minga-back-446z.onrender.com/mangas/${id}`;
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };
        try {
        await axios.delete(urlDelete, headers);
        return 'Manga deleted correctly';
        } catch (error) {
        let err = error.response.data.message;
        console.log('Ocurrió un error');
        throw new Error(err);
        }
    }
);


const modalActions = {deleteManga}
export default modalActions