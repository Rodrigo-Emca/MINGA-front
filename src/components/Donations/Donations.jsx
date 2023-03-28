import React, { useState } from 'react'
import Modal from 'react-modal'
import DonationCard from '../DonationCard/DonationCard'
import './Donations.css'
import union from '../../images/Union.png'
import logo from '../../images/Logo Dos.png'

export default function Donations() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModalOpen = () => {
        setModalIsOpen(true)
    }

    const handleModalClose = () => {
        setModalIsOpen(false)
    }

    const eachDonation = [
        {
            title: "Donate $1000",
            description: "Donation to Minga for $1.000 ARS",
            price: 1000,
        },
        {
            title: "Donate $5000",
            description: "Donation to Minga for $5.000 ARS",
            price: 5000,
        },
        {
            title: "Donate $10000",
            description: "Donation to Minga for $10.000 ARS",

            price: 10000,
        }
    ]

    return (
        <div>
        <button className='donateButton' onClick={handleModalOpen}>
            Donate <img src={union} alt='' />
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} className='ModalDonations' ariaHideApp={false}>
            <div className='titleContainer'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='titleModalDonations'>
                    <h3>Would you like to contribute with us?</h3>
                </div>
                <div>
                    <button className='closeButton' onClick={handleModalClose}>X</button>
                </div>
            </div>
                <div className='subtitleModalDonations'>
                    <h3>Here you have 3 ways to help MINGA to keep growing.</h3>
                </div>
            <div className='donationCardsContainer'>
                {eachDonation.map((donation)=><DonationCard donation={donation}/>)}
            </div>
        </Modal>
        </div>
    )
}