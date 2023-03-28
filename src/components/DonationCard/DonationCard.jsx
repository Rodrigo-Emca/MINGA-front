import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function DonationCard({donation}) {

    async function donateAmount() {
        let token = localStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };
        try {
            await axios.post('http://localhost:8000/payment', donation, headers)
            .then(async (res)=>{
                await Swal.fire({
                    icon: 'success',
                    title: 'Great!',
                    text: 'Press OK. You will be redirected to MercadoPago to make the payment. Thank you so much.'
                });
                return Promise.resolve(res);
            })
            .then((res)=>window.location.href = res.data.response.body.init_point);        
        } catch(error) {
            let err = error.response.data.message;
            console.log('Ocurrió un error');
            await Swal.fire({
                icon: 'error',
                title: 'Oops, there is a problemm!',
                text: err
            });
        }
    }
    

    return (
        <div className='donationCard'>
            <img src={donation.image} alt="" />
            <p> Click below to make a {donation.description}</p>
            <button className='donateButton' onClick={donateAmount}>Donate ${donation.price}ARS </button>
        </div>
    )
}