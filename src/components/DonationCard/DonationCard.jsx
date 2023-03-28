import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function DonationCard({donation}) {

    async function donateAmount() {
        let token = localStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };
        try {
            await axios.post('http://localhost:8000/payment', donation, headers)
            .then((res)=>window.location.href = res.data.response.body.init_point);
            
            await Swal.fire({
                icon: 'success',
                title: 'ÉXITO',
                text: 'Será redirigido al link de pago'
            })
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
            <p> Click on the button to make a {donation.description}</p>
            <button className='donateButton' onClick={donateAmount}>Donate ${donation.price}ARS </button>
        </div>
    )
}


// import React, {useEffect} from 'react'
// import './donationCard.css'
// import axios from 'axios'
// import Swal from 'sweetalert2'

// import { useSelector,useDispatch } from 'react-redux'
// import getDonations from '../../store/Donations/Actions'

// export default function DonationCard({donation}) {

//     const dispatch = useDispatch()
//     let token = localStorage.getItem('token');

    // const donateAmount = () => {
    //     dispatch(getDonations({token , donation }))
    // }

    // async function donateAmount() {
    //     let token = localStorage.getItem('token');
    //     let headers = { headers: { 'Authorization': `Bearer ${token}` } };
    //     try {
    //         await axios.post('http://localhost:8000/payment', donation, headers)
    //         .then((res)=>window.location.href = res.data.response.body.init_point);
            
    //         // await Swal.fire({
    //         //     icon: 'success',
    //         //     title: 'ÉXITO',
    //         //     text: 'Será redirigido al link de pago'
    //         // })
    //         } catch(error) {
    //         let err = error.response.data.message;
    //         console.log('Ocurrió un error');
    //         await Swal.fire({
    //             icon: 'error',
    //             title: 'Oops, there is a problemm!',
    //             text: err
    //         });
    //         }
    //     }

//     return (
//         <div className='donationCard'>
//             <img src={donation.image} alt="" />
//             <p> Click on the button to make a {donation.description}</p>
//             <button className='donateButton' onClick={() => {
//         dispatch(getDonations({token , donation }))
//     }}>Donate ${donation.price}ARS </button>
//         </div>
//     )
// }