import React from 'react';
import { ListItems } from './DashboardElements';

const PlantListItem = (props) => {
  const { plant } = props;

  return (
    <ListItems to={`/plants/${plant.plant_id}`}>{plant.nickname}</ListItems>
  );
};

export default PlantListItem;
