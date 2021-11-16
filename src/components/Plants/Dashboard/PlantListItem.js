import React from 'react';
import { ListItems } from './DashboardElements';

const PlantListItem = (props) => {
  const { plant_id, nickname } = props.plant;

  return <ListItems to={`/plants/${plant_id}`}>{nickname}</ListItems>;
};

export default PlantListItem;
