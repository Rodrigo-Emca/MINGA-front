import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getDonations = createAsyncThunk(
    'getDonations',
    async ({ token, donation }) => {
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        try{
            let response = await axios.post('https://minga-back-446z.onrender.com/payment', donation, headers)
            console.log(response.data)
            return { donations: response.data}
        }catch(error){
            console.log(error)
            return{
                donations: []
            }
        }
    }
)

const actions = {getDonations}
export default actions