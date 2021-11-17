import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  DetailContainer,
  ImageContainer,
  Image,
  PlantInfo,
  Label,
  Name,
  Species,
  WaterFreq,
  Buttons,
  Button,
} from './DashboardElements';

const Plant = (props) => {
  const [plant, setPlant] = useState('');

  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(`https://water-my-plants-7-ft.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        setPlant(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleDelete = () => {
    axios
      .delete(`https://water-my-plants-7-ft.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        props.setPlants(res.data);
        push('/plants');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    push(`/plants/edit/${id}`);
  };

  return (
    <DetailContainer>
      <ImageContainer>
        <Image src={plant.image} alt={plant.name} />
      </ImageContainer>
      <PlantInfo>
        <Label>Name:</Label>
        <Name>{plant.nickname}</Name>
        <Label>Species:</Label>
        <Species>{plant.species}</Species>
        <Label>Water Frequency:</Label>
        <WaterFreq>{plant.h20frequency}</WaterFreq>
        <Buttons>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Buttons>
      </PlantInfo>
    </DetailContainer>
  );
};

export default Plant;
