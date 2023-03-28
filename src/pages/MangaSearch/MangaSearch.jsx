import React from 'react'
import MangasG from '../../components/MangasG/MangasG'

export default function MangaSearch() {
  let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  return (
    token ?
    <MangasG/> : window.location.href='/'
  )
}
