import { Link as Anchor } from 'react-router-dom'
import './MangaCard.css'

export default function MangaCard(props) {
  return (
    <div className='card-container'>
      <span className='span'></span>
      <div className='inf-card'>
        <h2 className='title-card'>{props.title}</h2>
        <h3 className='category-card'>{props.category_.name}</h3>
        <Anchor to={"/mangas/"+props.id_}>
          <button className='btn-card'>Read</button>
        </Anchor>
      </div>
      <img className='img-card' src={props.photo} alt="naruto" />
    </div>

  )
}


