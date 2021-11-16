import axios from 'axios';
import React, { useEffect } from 'react';
import {
  WelcomeMessage,
  PlantAmount,
  PlantListWrapper,
  PlantListContainer,
} from './DashboardElements';
import PlantListItem from './PlantListItem';

const dummyPlantData = [
  {
    id: 0,
    name: 'Peace Lily',
    species: 'Spathiphyllum',
    freq: 'Every other day',
    image:
      'https://images.unsplash.com/photo-1620310252507-c65943dbd411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: 1,
    name: 'Plant Name 1',
    species: 'Plant Species 1',
    freq: 'Every other day',
    image:
      'https://images.unsplash.com/photo-1620310252507-c65943dbd411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: 2,
    name: 'Plant Name 2',
    species: 'Plant Species 2',
    freq: 'Every other day',
    image:
      'https://images.unsplash.com/photo-1620310252507-c65943dbd411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
];

const PlantList = () => {
  useEffect(() => {
    axios
      .get('https://water-my-plants-7-ft.herokuapp.com/api/plants')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <WelcomeMessage>Welcome Username</WelcomeMessage>
      <PlantAmount>You have {dummyPlantData.length} Plants!</PlantAmount>
      {dummyPlantData.length && (
        <PlantListWrapper>
          <PlantListContainer>
            {dummyPlantData.map((plant) => (
              <PlantListItem key={plant.id} plant={plant} />
            ))}
          </PlantListContainer>
        </PlantListWrapper>
      )}
    </>
  );
};

export default PlantList;
