import React from 'react'
import './myMangasPrevNextBtns.css'

import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MyMangasPrevNextBtns() {
    let page = Number(useParams().page)
    let myMangas = useSelector(store=> store.myMangas.mangas)

    return (
        <div className='page-manga'>
            {page === 1 ? "" : <Anchor className='btn-prev' to={'/mymangas/' + (page - 1)} >Prev</Anchor>}
            { myMangas.length === 6 || myMangas.length === 10 ? <Anchor className='btn-next' to={'/mymangas/' + (page + 1)} >Next</Anchor> : "" }
        </div>
    )
}