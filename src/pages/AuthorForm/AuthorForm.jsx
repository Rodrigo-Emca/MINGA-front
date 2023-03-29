import React, { useState, useRef } from "react";
import AuthorNameInput from "./NameInput";
import AuthorCityCountryInput from "./LocationInput";
import AuthorBirthDateInput from "./BirthDateInput";
import AuthorImageUrlInput from "./ProfileImageInput";
import "./AuthorForm.css";
import axios from "axios";
import BtnRedirect from '../../components/BtnRedirect/BtnRedirect'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../store/Autores/actions'
import { Link as Anchor } from 'react-router-dom'
import rectangle from "../../images/Rectangle 10 (1).png";
const {isAuthor} = actions

function AuthorForm() {

    const dispatch = useDispatch()
    let author = useSelector(store => store.autor.author)
    console.log(author)
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    useEffect(
        ()=>{
            if(author){
                dispatch(isAuthor())
            }
        },[]
    )

  const [authorCreated, setAuthorCreated] = useState(false);
  const nameRef = useRef();
  const lastNameRef = useRef();
  const cityCountryRef = useRef();
  const birthdateRef = useRef();
  const imageUrlRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const [city, country] = cityCountryRef.current.value.split(",");
    const author = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      city: city.trim(),
      country: country.trim(),
      birthdate: birthdateRef.current.value,
      imageUrl: imageUrlRef.current.value,
    };
    // obtener headers localStorage
      let token = localStorage.getItem('token')
      let headers = {headers: {'Authorization': `Bearer ${token}`}}
    axios
      .post("http://localhost:8000/api/authors", author, headers)
      .then((response) => {
        setAuthorCreated(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response);
        alert("Error creating author");
      });
  };

  return (
    token ?
    <div className="container">
      <div className="form-container">
        <h1>New author</h1>
        <div className="image-container">
          <img src={rectangle} alt="Author Profile" className="image" />
        </div>
        <form onSubmit={handleSubmit}>
          <AuthorNameInput
            nameRef={nameRef}
            lastNameRef={lastNameRef}
            className="author-input"
            Id="author-name"
          />
          <AuthorCityCountryInput
            onInputChange={(city, country) => {
              cityCountryRef.current.value = `${city}, ${country}`;
            }}
            ref={cityCountryRef}
            className="author-input"
            id="author-location"

          />
          <AuthorBirthDateInput
            ref={birthdateRef}
            className="author-input, author-birthdate"
          />
          <AuthorImageUrlInput
            ref={imageUrlRef}
            className="author-input, author-birthdate"
          />
          <button type="submit" className="author-submit-button">
            Send
          </button>
        </form>
        {authorCreated && (
          <p className="author-created-message">
            Author created successfully!
          </p>
        )}
      </div>
    </div> : <BtnRedirect/>
  );
}

export default AuthorForm;










