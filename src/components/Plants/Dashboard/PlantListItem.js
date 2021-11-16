import React from 'react';
import { ListItems } from './DashboardElements';

const PlantListItem = ({plant}) => {

  return (
    <ListItems to={`/plants/${plant.id}`}>
      {plant.name}
    </ListItems>
  );
};

export default PlantListItem;
