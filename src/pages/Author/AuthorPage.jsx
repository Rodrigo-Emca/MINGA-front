import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Switch from "./AuthorSwitch";
import AuthorHeader from "./AuthorHeader";
import { useParams } from "react-router-dom";
import line from "../../images/Line 12.png";
import axios from "axios";
import "./AuthorPage.css";

function AuthorPage() {
  const params = useParams();
  const [isNew, setIsNew] = useState(true);
  const [author, setAuthor] = useState();
  const [authorMangas, setAuthorMangas] = useState([]);
  const mangaList = useSelector(state => state.mangaList);
  const authorList = useSelector(state => state.authorList);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${params.id}`)
      .then(res => {
        setAuthor(res.data);
        console.log(res.data);
        console.log(res.data);
        let name = res.data.name;
        let lastName = res.data.last_name;
        console.log(lastName);
        console.log(res.data.photo);
      })
      .catch(err => console.log(err));

    axios
      .get(`http://localhost:8000/mangas/authors/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        setAuthorMangas(res.data.response);
        console.log(res.data.response);
      })
      .catch(err => console.log(err));
  }, [params.id]);

  if (!author) {
    return <div>Loading...</div>;
  }

  const sortedMangas = authorMangas.sort((a, b) => {
    if (isNew) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  return (
    <>
      <AuthorHeader author={author} />
      <Switch isNew={isNew} setIsNew={setIsNew} />
      <div className="manga-container">
        {sortedMangas.length ? (
          sortedMangas.map(manga => (
            <div className="manga-card" key={manga._id}>
              <img
                src={manga.cover_photo}
                alt={manga.title}
                className="manga-cover"
              />
               <a href="#" className="details">Watch details!</a>
              <p className="manga-title">{manga.title}</p>
             
            </div>
          ))
        ) : (
          <div>No se encontraron mangas para este autor</div>
        )}
      </div>
    </>
  );
}

export default AuthorPage;



