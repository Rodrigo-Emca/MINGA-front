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
const {get_chapters} = getChapters


export default function Manga() {
    const { id } = useParams();
    const { page } = useParams();
    const dispatch = useDispatch()
    const [MANGA, setManga] = useState(null);

    useEffect(() => {
        dispatch(get_manga({inputId: id, inputPage: page}))
        .then((response) => {
            setManga(response.payload.manga);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    let titleManga = useSelector(store=>store.manga.manga.title);
    let descriptionManga = useSelector(store=>store.manga.manga.decription);
    let imageManga =useSelector(store=>store.manga.manga.cover_photo);

    const [CHAPTERS, setChapters] = useState(null);
    const [mostrarChapters, setMostrarChapters] = useState(false);

    //Para mostrar los detalles cada vez que se aprete el boton MANGA.
    const handleMostrarDetallesClick = () => {
        dispatch(get_manga({inputId: id, inputPage: page}))
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
        dispatch(get_chapters({inputId: id, inputPage: page}))
        .then((response) => {
            setChapters(response.payload.chapters);
            setMostrarChapters(true);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handlePrevPage = () => {
        if (page > 1) {
            const newPage = parseInt(page) - 1;
            window.location.href = `/manga/${id}/${newPage}`;
            dispatch(get_chapters({ inputId: id, inputPage: newPage }))
                .then((response) => {
                    setChapters(response.payload.chapters);
                    setMostrarChapters(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const handleNextPage = () => {
        const newPage = parseInt(page) + 1;
        window.location.href = `/manga/${id}/${newPage}`;
        dispatch(get_chapters({ inputId: id, inputPage: newPage }))
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
                    <p>{descriptionManga}</p>
                </div>
            )}
            {mostrarChapters && (
                <div className="contenedorChapters">
                    <div>
                        {CHAPTERS && CHAPTERS.map((chapter, index) => (
                            <div key={index} className="innerContenedorChapter">
                                <img src={imageManga} alt={chapter.title}  className="chapterImage"/>
                                <div className="ChapterInfo">
                                    <p>Chapter #{chapter.order}:</p>
                                    <p>{chapter.title}</p>
                                </div>
                                <Anchor to={"/chapter/"+chapter._id} className='btn-read'>Read</Anchor>
                            </div>
                        ))}
                    </div>
                    <div className="conenedorDeBotones">
                        <button onClick={handlePrevPage} className={`botones ${page === '1' ? 'ocultar' : ''}`}>
                        Prev
                        </button>
                        <button onClick={handleNextPage} className="botones">
                        Next
                        </button>
                    </div>
                </div>
            )}
    </div>
    )
}