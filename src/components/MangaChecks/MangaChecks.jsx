import React from 'react'
import './MangaChecks.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import checksAction from '../../store/checks/actions'

let { captureChecks} =checksAction

export default function MangaChecks() {
  let dispatch = useDispatch()

  let url = "http://localhost:8000/mangas"

    let [categories, setCategories] = useState([])

    useEffect(
        () => {
            axios.get(url)
            .then( response => setCategories(response.data.categories)
            ).catch(e => console.log(e))
        },[]
    )
   
    let categories_name = categories.map(e => e.name)
    //console.log(categories_name)
    let categories_id = categories.map(e => e._id)
    
    const checks_value = useSelector(store=> store.checks.checks)

    const checks = (e)=> {
      const value = e.target.value
      let newValues
      if(checks_value.includes(value)){
        newValues = checks_value.filter(val => val!== value)
      }else{
        newValues = [...checks_value, value]
      }
      dispatch(captureChecks({inputCheck: newValues}))
      
    }
   console.log(useSelector(store=> store.checks.checks))
  return (
    <div className='check-container'>
        <label className='checksA' htmlFor="All">All</label>
        <input className='input-check' type="checkbox" name="All" id="All" value="" onChange={checks}/>

        <label className='checksB' htmlFor={categories_name[0]}>{categories_name[0]}</label>
        <input className='input-check' type="checkbox" name={categories_name[0]} id={categories_name[0]} value={categories_id[0]}onChange={checks}/>

        <label className='checksC' htmlFor={categories_name[1]}>{categories_name[1]}</label>
        <input className='input-check' type="checkbox" name={categories_name[1]} id={categories_name[1]} value={categories_id[1]} onChange={checks}/>

        <label className='checksD' htmlFor={categories_name[2]}>{categories_name[2]}</label>
        <input className='input-check' type="checkbox" name={categories_name[2]} id={categories_name[2]} value={categories_id[2]}onChange={checks} />

        <label className='checksE' htmlFor={categories_name[3]}>{categories_name[3]}</label>
        <input className='input-check' type="checkbox" name={categories_name[3]} id={categories_name[3]} value={categories_id[3]}onChange={checks} />
    </div>
  )
}

