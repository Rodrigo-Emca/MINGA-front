import {useRef} from "react";
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

export default function AuthorForm() {
  const firstName = useRef();
  const lastName = useRef();
  const cityCountry = useRef();
  const date = useRef();
  const urlProfile = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let headers = {headers: {Authorization: `Bearer ${token}`}};
    if (cityCountry.current.value.includes(",")) {
      let city = cityCountry.current.value.split(",")[0].trim();
      let country = cityCountry.current.value.split(",")[1].trim();
      let data = {
        [firstName.current.name]: firstName.current.value,
        [lastName.current.name]: lastName.current.value,
        city: city,
        country: country,
        [date.current.name]: date.current.value,
        [urlProfile.current.name]: urlProfile.current.value,
      };
      let url = "https://minga-back-446z.onrender.com/authors";
      try {
        await axios.post(url, data, headers);
        formRef.current.reset();
        dispatch(open({icon: "success", title: "Author created successfully.", type: "toast"}));
      } catch (error) {
        dispatch(open({icon: "errot", title: error.response.data.message, type: "basic"}));
      }
    } else {
      dispatch(open({icon: "errot", title: "The city and the country must be separated by a comma.", type: "basic"}));
    }
  }
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
