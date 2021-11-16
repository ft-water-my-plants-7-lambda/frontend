import React from 'react';
import { useHistory } from 'react-router-dom';
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

const dummyPlantData = [
  {
    id: 0,
    name: 'Plant Name',
    species: 'Plant Species',
    freq: 'Every other day',
    image:
      'https://images.unsplash.com/photo-1620310252507-c65943dbd411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
];

const Plant = (props) => {
  const history = useHistory();

  const handleEdit = () => {
  };

  const handleDelete = () => {};

  return (
    <DetailContainer>
      <ImageContainer>
        <Image src={dummyPlantData[0].image} alt={dummyPlantData[0].name} />
      </ImageContainer>
      <PlantInfo>
        <Label>Name:</Label>
        <Name>{dummyPlantData[0].name}</Name>
        <Label>Species:</Label>
        <Species>{dummyPlantData[0].species}</Species>
        <Label>Water Frequency:</Label>
        <WaterFreq>{dummyPlantData[0].freq}</WaterFreq>
        <Buttons>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Buttons>
      </PlantInfo>
    </DetailContainer>
  );
};

export default Plant;
