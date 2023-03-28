import React from 'react'
import FormManga from '../../components/FormManga/FormManga'
import './formMangaPage.css'
import axios from "axios";
import BtnRedirect from '../../components/BtnRedirect/BtnRedirect'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../store/Autores/actions'
import { Link as Anchor } from 'react-router-dom'
import rectangle from "../../images/Rectangle 10 (1).png";
const {isAutor} = actions

export default function FormMangaPage() {
  const dispatch = useDispatch()
    let author = useSelector(store => store)
    console.log(author)
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    useEffect(
        ()=>{
            if(author){
                dispatch(isAutor())
            }
        },[]
    )
  return (
    token && author?.active ? <FormManga /> : <BtnRedirect/>
  )
}
