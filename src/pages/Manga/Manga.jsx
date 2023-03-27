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
    const { id, page } = useParams();
    const dispatch = useDispatch();
    const [MANGA, setManga] = useState(null);
    const [CHAPTERS, setChapters] = useState(null);
    const [mostrarChapters, setMostrarChapters] = useState(false);
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        dispatch(get_manga({ inputId: id, inputPage: currentPage }))
            .then((response) => {
                setManga(response.payload.manga);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, currentPage]);

    let titleManga = useSelector((store) => store.manga.manga.title);
    let descriptionManga = useSelector(
        (store) => store.manga.manga.decription
    );
    let imageManga = useSelector(
        (store) => store.manga.manga.cover_photo
    );

    const handleMostrarDetallesClick = () => {
        dispatch(get_manga({ inputId: id, inputPage: currentPage }))
            .then((response) => {
                setManga(response.payload.manga);
                setMostrarChapters(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleMostrarChaptersClick = () => {
        dispatch(get_chapters({ inputId: id, inputPage: currentPage }))
            .then((response) => {
                setChapters(response.payload.chapters);
                setMostrarChapters(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const newPage = parseInt(currentPage) - 1;
            setCurrentPage(newPage);
            dispatch(get_chapters({ inputId: id, inputPage: newPage }))
                .then((response) => {
                    setChapters(response.payload.chapters);
                    setMostrarChapters(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleNextPage = () => {
        const newPage = parseInt(currentPage) + 1;
        setCurrentPage(newPage);
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
                            <div>
                                <div key={index} className="innerContenedorChapter">
                                    <img src={chapter.pages[0]} alt={chapter.title}  className="chapterImage"/>
                                    <div className="ChapterInfo">
                                        <p>Chapter #{chapter.order}:</p>
                                        <p>{chapter.title}</p>
                                    </div>
                                    <Anchor to={"/chapters/"+chapter._id+'/0'} className='btn-read'>Read</Anchor>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="conenedorDeBotones">

                        {currentPage === 1 ? "" :<Anchor onClick={handlePrevPage} className='botones' to={'/manga/'+ id + "/" + (currentPage - 1)}>Prev</Anchor>}

                        {CHAPTERS.length >= 4 ? <Anchor onClick={handleNextPage} className='botones' to={'/manga/'+ id + "/" + (currentPage + 1)}>Next</Anchor>: ""}

                    </div>
                </div>
            )}
    </div>
    )
}