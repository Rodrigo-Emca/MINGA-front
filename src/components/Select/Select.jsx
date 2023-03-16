import React from 'react'
import './Select.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Select(props) {

    let url = "http://localhost:8000/mangas"

    let [categories, setCategories] = useState([])

    useEffect(
        () => {
            axios.get(url)
            .then( response => setCategories(response.data.categories)
            ).catch(e => console.log(e))
        },[]
    )

    categories = categories.map(e => e.name)
    console.log(categories)

  return (
    <select className="select-manga"name={props.name} ref={props.parentRef} id="insert-categories">
        <option className='option'>Insert Category</option>
        {
            categories.map((e) => <option key={e} value={e}>{e}</option> )
        }
    </select>
    
  )
}
 