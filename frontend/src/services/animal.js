import axios from "axios";
import { BASE_URL } from "../constants/url";

// CREATE NEW ANIMAL
export const createAnimal = (body, clear, setIsLoading) => {
  axios
    .post(`${BASE_URL}/animals`, body)
    .then((res) => {
      console.log(res.data);
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      alert("Erro", err.response);
      setIsLoading(false);
    });
};

// DELETE ANIMAL
export const deleteAnimal = (id, getData) => {
  axios
    .delete(`${BASE_URL}/animals/${id}`)
    .then((res) => {
      console.log(res.data);
      getData();
    })
    .catch((err) => {
      alert("Erro", err.response);
    });
};

// EDIT ANIMAL
export const updateAnimal = (id, body, clear, setIsLoading, getData, setEdition) => {
  axios
    .put(`${BASE_URL}/animals/${id}`, body)
    .then((res) => {
      console.log(res);
      setIsLoading(false);
      getData();
      setEdition(false)
      clear();
    })
    .catch((err) => {
      alert("Erro", err.response);
      setIsLoading(false);
    });
};
