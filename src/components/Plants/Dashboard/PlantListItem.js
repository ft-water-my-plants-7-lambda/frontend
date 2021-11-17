import React from 'react';
import { ListItems } from './DashboardElements';

const PlantListItem = ({ plant_id, nickname }) => {
  return <ListItems to={`/plants/${plant_id}`}>{nickname}</ListItems>;
};

export default PlantListItem;
