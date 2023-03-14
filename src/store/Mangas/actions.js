import axios from "axios";
import { useParams } from "react-router-dom";
export const FETCH_AUTHOR_MANGAS_SUCCESS = "FETCH_AUTHOR_MANGAS_SUCCESS";

export const fetchAuthorMangasSuccess = (data) => {
  return {
    type: FETCH_AUTHOR_MANGAS_SUCCESS,
    payload: data,
  };
};

export const fetchAuthorMangas = (authorId, page) => {
  return async (dispatch) => {
    try {
      const response = await axios
      .get(`http://localhost:8000/mangas/authors/${authorId}?page=${page}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      const data = {
        mangas: response.data.response,
      };
console.log(data)
      dispatch(fetchAuthorMangasSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

