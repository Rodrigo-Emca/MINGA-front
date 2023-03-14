import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import MangaCard from '../../components/MangaCard/MangaCard'
import './mangaSearch.css'
import MangaChecks from '../../components/MangaChecks/MangaChecks'
import textActions from '../../store/Text/actions'

const { capture } = textActions

export default function Index() {
  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()
  const defaultText = useSelector(store => store.text.text)
  const text = useRef("")

  const checksValues = useSelector(store =>store.checks.checks) 


  useEffect(
    () => { axios.get(`http://localhost:8000/mangas/read?title=${text.current.value}&category_id=${checksValues.join()}`).then(res => setData(res.data.mangas)) },
    [reload,checksValues]
  )

  function hadleChange() {
    setReload(!reload)
    dispatch(capture({ text: text.current.value }))
  }
  console.log(data)


  return (
    <div className='manga-cont'>
      <div className='search-manga'>
        <h2 className='title-page'>Manga</h2>
        <div className='container-searh-manga'>
          <form className='form' >
            <input className="input" type="text" ref={text} defaultValue={defaultText} name="text" id="text" placeholder='Find your manga here' onChange={hadleChange} />
          </form>
        </div>
      </div>
      <div className='card'>

        <div className=''>
          <MangaChecks  />
        </div> 
     
      
        <div className='cont-cards'>
          {data?.map(each => <MangaCard key={each._id} title={each.title} category_={each.category_id} photo={each.cover_photo} id_={each._id}/>)}
        </div>

        <div className='page'>
          <button className='prev'>Prev</button>
          <button className='next'>Next</button>
        </div>
      </div>
    </div>

  )
}
