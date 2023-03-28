import React from 'react'
import ChapterDetails from '../../components/CahpterDetails/ChapterDetails'

export default function Pagina() {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    return (
        token ? <ChapterDetails/> : window.location.href='/'
)
}
