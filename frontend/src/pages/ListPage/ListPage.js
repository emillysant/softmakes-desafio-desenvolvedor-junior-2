import React from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToCreate, goToDetails } from "../../routes/coordinator";
import { useEffect, useState } from "react";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { deleteAnimal } from "../../services/animal";
import { Container, ButtomContainer } from "./styled";

const ListPage = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const [animals, isLoading, error, getData] = useRequestData(
    [],
    `${BASE_URL}/animals`
  );

  console.log("Retorno lista de animais", animals);
  const onClickButton = () => {
    goToCreate(history);
  };

  const onClickCard = (id) => {
    goToDetails(history, id);
  };

  const onClickdelete = (id) => {
    deleteAnimal(id, getData);
  };

  useEffect(() => {}, []);

  const animalsCard = animals?.map((animal) => {
    return (
      <AnimalCard
        key={animal.id}
        name={animal.name}
        specie={animal.specie}
        onClick={() => onClickCard(animal.id)}
        delete={() => onClickdelete(animal.id)}
      />
    );
  });

  return (
    <Container>
      <p class="h3">Lista de Animais no petshop</p>
      <ButtomContainer>
        <button onClick={onClickButton} type="button" class="btn btn-primary">
          Adicionar
        </button>
      </ButtomContainer>
      {!isLoading && !error && animalsCard}
    </Container>
  );
};

export default ListPage;
