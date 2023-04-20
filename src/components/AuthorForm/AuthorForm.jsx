import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthorNameInput from "./AuthorNameInput";
import AuthorCityCountryInput from "./AuthorCityCountryInput";
import AuthorBirthdateInput from "./AuthorBirthdateInput";
import AuthorImageInput from "./AuthorImageInput";

function AuthorForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const author = {
      name: name,
      lastName: lastName,
      city: city,
      country: country,
      birthdate: birthdate,
      imageUrl: imageUrl,
    };

    fetch("/api/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(author),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error creating author");
        }
      })
      .then((data) => {
        alert("Author created successfully!");
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating author");
      });
  };

  return (
    <div>
      <h1>Create a new author</h1>
      <form onSubmit={handleSubmit}>
        <AuthorNameInput
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
        />
        <AuthorCityCountryInput
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />
        <AuthorBirthdateInput
          birthdate={birthdate}
          setBirthdate={setBirthdate}
        />
        <AuthorImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <button type="submit">Create Author</button>
      </form>
    </div>
  );
}

export default AuthorForm;

