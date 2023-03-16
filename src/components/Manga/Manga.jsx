import React,{useRef,useState,useEffect} from 'react'
import { useParams,Link as Anchor,useNavigate } from 'react-router-dom'
import './manga.css'
import MangaCard from '../MangaCard/MangaCard'
import MangaChecks from '../MangaChecks/MangaChecks'
import { useSelector,useDispatch } from 'react-redux'
import textActions from '../../store/search/actions'
import mangaActions from '../../store/Mangas/actions'
const {captureText} = textActions
const {read_mangas} = mangaActions




export default function Manga() {
    const title = useRef("")
    const dispatch = useDispatch()
    const [reload,setReload] = useState(false)
    const {page} = useParams()
    const pageNumber = Number(page)
    let navigate = useNavigate()
    useEffect(() => {
        if (page === ':page') {
          navigate('/mangas/1')
        }
      }, [page]);
    

    let mangas = useSelector(store => store.events.events)
    let defaultText = useSelector(store => store.text.text)
    let defaultChecks = useSelector(store=>store.checks.checks)

    useEffect(
        () => {
            dispatch(read_mangas({inputText:defaultText,inputCheck:defaultChecks,inputPage:page}))
        },
        [page,defaultText,defaultChecks,reload]
    )



    function handleChange(){
        setReload(!reload)
        dispatch(captureText({inputText: title.current.value}))
    }   


  return (
    <div className='manga'>
        <div className='search-manga'>
            <h2 className='name-page'>Manga</h2>
            <div className='cont-searh-manga'>
                <form className='form-search' >
                    <input ref={title} defaultValue={defaultText} className='input-search' type="text" name="title" id="title" placeholder='Find your manga here' onChange={handleChange}/>
                </form>
            </div>
        </div>
        <div className='card-manga'>
            <div className='cont-checks'>
                <MangaChecks />
            </div>
            <div className='cont-cards'>
                {mangas.length?(mangas.map((manga) => (
                        <MangaCard key={manga._id} title_={manga.title}  category_={manga.category_id} photo={manga.cover_photo} _id={manga._id}/>
                    ))):<p>not found</p>} 
            </div>
            <div className='page-manga'>
                {pageNumber === 1 ? "" :<Anchor  className='btn-prev' to={'/mangas/' + (pageNumber - 1)}>Prev</Anchor>}
                {mangas.length === 6 || mangas.length === 10 ? <Anchor  className='btn-next' to={'/mangas/' + (pageNumber + 1)}>Next</Anchor>: ""}
            </div> 
        </div>
    </div>
  )
}