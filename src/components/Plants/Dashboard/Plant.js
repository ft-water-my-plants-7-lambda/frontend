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

import { connect } from 'react-redux';
import { handleGetPlantById } from '../../../lib/actions/handleGetPlantById';
import { handleDeletePlant } from '../../../lib/actions/handleDeletePlant';

import DeleteMovieModal from './DeletePlantModal';

const Plant = ({ handleGetPlantById, handleDeletePlant }) => {
  const [plant, setPlant] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    if (id) handleGetPlantById(id, (plantData) => setPlant(plantData));
  }, [id, handleGetPlantById]);

  const handleModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleDelete = () => {
    handleDeletePlant(id);
    setDeleteModal(false);
    push('/plants');
  };

  const cancelDelete = () => {
    setDeleteModal(false);
  };

  const handleEdit = () => {
    push(`/plants/edit/${id}`);
  };

  return (
    <>
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
            <Button onClick={handleModal}>Delete</Button>
          </Buttons>
        </PlantInfo>
      </DetailContainer>
      {deleteModal && <DeleteMovieModal handleDelete={handleDelete} cancelDelete={cancelDelete} />}
    </>
  );
};

export default connect(null, { handleGetPlantById, handleDeletePlant })(Plant);
