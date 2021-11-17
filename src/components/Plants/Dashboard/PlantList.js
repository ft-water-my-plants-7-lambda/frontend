import { useState, useEffect } from 'react';
import {
  WelcomeMessage,
  PlantAmount,
  PlantListWrapper,
  PlantListContainer,
} from './DashboardElements';
import PlantListItem from './PlantListItem';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // const { plants: plantsData } = handleGetAllPlants();
    // setPlants(plantsData)
  }, []);

  return (
    <>
      <WelcomeMessage>Welcome Username</WelcomeMessage>
      <PlantAmount>You have {plants.length} Plants!</PlantAmount>
      {plants.length && (
        <PlantListWrapper>
          <PlantListContainer>
            {plants.map((plant) => (
              <PlantListItem key={plant.plant_id} {...plant} />
            ))}
          </PlantListContainer>
        </PlantListWrapper>
      )}
    </>
  );
};

export default PlantList;
