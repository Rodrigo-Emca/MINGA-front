import React, { useState, useEffect } from "react";
import "./manga.css";
import { useParams } from "react-router-dom";
import { Link as Anchor } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import getManga from '../../store/Manga/actions'
import getChapters from '../../store/Chapters/actions'
import CHAPTERStats from "../../images/CHAPTERStats.png";
import CHAPTERreactions from "../../images/CHAPTERreactions.png";
import { store } from "../../store/store";
const {get_manga} = getManga
const {get_chapter} = getChapters


export default function Manga() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [MANGA, setManga] = useState(null);

    console.log(useSelector(store=>store))

    useEffect(() => {
        dispatch(get_manga({inputId: id}))
        .then((response) => {
            setManga(response.payload.manga);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    let titleManga = MANGA ? MANGA.title : "";
    let descriptionManga = MANGA ? MANGA.decription : "";
    let imageManga = MANGA ? MANGA.cover_photo : "";

    const [CHAPTERS, setChapters] = useState(null);
    const [mostrarChapters, setMostrarChapters] = useState(false);
    
    //Para mostrar los detalles cada vez que se aprete el boton MANGA.
    const handleMostrarDetallesClick = () => {
        dispatch(get_manga({inputId: id}))
        .then((response) => {
            setManga(response.payload.manga);
            setMostrarChapters(false);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    //Para mostrar los capitulos cada vez que se aprete el boton CHAPTERS.
    const handleMostrarChaptersClick = () => {
        dispatch(get_chapter({inputId: id}))
        .then((response) => {
            setChapters(response.payload.chapters);
            setMostrarChapters(true);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    return (
        <div className="contenedorGeneral">
            <div className="primerContenedor">
                <div>
                <img src={imageManga} alt="MangaImage" className="mangaImagen" />
                </div>
                <div>
                <h1>{titleManga}</h1>
                </div>
                <div className="statsReactions">
                <img src={CHAPTERStats} alt="CHAPTERStats" />
                <img src={CHAPTERreactions} alt="CHAPTERreactions" />
                </div>
            </div>
            <div className="conenedorDeBotones">
                <button onClick={handleMostrarDetallesClick} className="botones">
                MANGA
                </button>
                <button onClick={handleMostrarChaptersClick} className="botones">
                CHAPTERS
                </button>
            </div>

            {!mostrarChapters && (
                <div className="contenedorDescription">
                    <div>
                        <p>{descriptionManga}</p>
                    </div>
                </div>
            )}
            {mostrarChapters && (
                <div className="contenedorChapters">
                    <div>
                        {CHAPTERS && CHAPTERS.map((chapter, index) => (
                            <div key={index} className="innerContenedorChapter">
                                <img src={imageManga} alt={chapter.title}  className="chapterImage"/>
                                <div>
                                    <p>Title: {chapter.title}</p>
                                    <p>Order: {chapter.order}</p>
                                </div>
                                <Anchor to={"/chapter/"+id} className='btn-read'>Read</Anchor>
                            </div>
                        ))}
                    </div>
                </div>
            )}
    </div>
    )
}