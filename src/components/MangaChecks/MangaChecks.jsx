import React from 'react'
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
    <div>
        <label htmlFor="All">All</label>
        <input type="checkbox" name="All" id="All" value="" onChange={checks}/>

        <label htmlFor={categories_name[0]}>{categories_name[0]}</label>
        <input type="checkbox" name={categories_name[0]} id={categories_name[0]} value={categories_id[0]}onChange={checks}/>

        <label htmlFor={categories_name[1]}>{categories_name[1]}</label>
        <input type="checkbox" name={categories_name[1]} id={categories_name[1]} value={categories_id[1]} onChange={checks}/>

        <label htmlFor={categories_name[2]}>{categories_name[2]}</label>
        <input type="checkbox" name={categories_name[2]} id={categories_name[2]} value={categories_id[2]}onChange={checks} />

        <label htmlFor={categories_name[3]}>{categories_name[3]}</label>
        <input type="checkbox" name={categories_name[3]} id={categories_name[3]} value={categories_id[3]}onChange={checks} />
    </div>
  )
}

/* 
        <h2 className='title-card'>{data.title}</h2>
*/
/* 
<label htmlFor="all">all</label>
*/


/* 
    <div>
        
        <input type="checkbox" name={data.title} id={data.title} value={data.title}/> 
    </div>

*/
