import React,{useRef,useState,useEffect} from 'react'
import { useParams,Link as Anchor,useNavigate } from 'react-router-dom'
import './myMangas.css'
import MangaCard from '../MyMangaCards/MyMangaCards'
import MyMangasPrevNextBtns from '../MyMangasPrevNextBtns/MyMangasPrevNextBtns'
import { useSelector,useDispatch } from 'react-redux'
import getMyMangas from '../../store/MyMangas/actions'


export default function MyMangas() {
    const dispatch = useDispatch()
    const {page} = useParams()
    const pageNumber = Number(page)
    let navigate = useNavigate()
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        if (page === ':page') {
            navigate('/mangas/1')
        }
    }, [page]);
    
    let myMangas = useSelector(store=> store.myMangas.mangas)
    let token = localStorage.getItem('token')
    const { my_mangas } = getMyMangas

    useEffect(() => {
        dispatch(my_mangas({token }))
    }, [reload])

    return (
        <div className='manga'>
            <div className='search-manga'>
                <h2 className='name-page'>My Mangas</h2>
            </div>
            <div className='card-manga'>
                <div className='cont-cards'>
                    {myMangas.length?(myMangas.map((manga) => (
                            <MangaCard reload={reload} setReload={setReload} key={manga._id} title_={manga.title}  category_={manga.category_id} photo={manga.cover_photo} _id={manga._id}/>
                        ))):<p>not found</p>} 
                </div>
                <MyMangasPrevNextBtns/>
            </div>
        </div>
    )
}
