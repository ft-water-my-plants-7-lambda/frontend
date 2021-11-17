import React from 'react';

import {
  ModalContainer,
  ModalContent,
  ModalWarningText,
  SmallText,
  Button,
  DeleteButton,
} from './DashboardElements';

const DeleteMovieModal = (props) => {
  const handleDelete = () => {
    props.handleDelete();
  };

  const handleCancel = () => {
    props.cancelDelete();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <section>
          <div>
            <ModalWarningText>Are you sure you want to delete this plant?</ModalWarningText>
            <SmallText>This action cannot be undone.</SmallText>
          </div>
          <div>
            <Button onClick={handleCancel}>Cancel</Button>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          </div>
        </section>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteMovieModal;
