import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  ModalContainer,
  ModalContent,
  ModalWarningText,
  SmallText,
  Button,
  DeleteButton,
} from './DashboardElements';

const DeleteMovieModal = (props) => {
  const { push } = useHistory();

  const handleDelete = () => {
    props.handleDelete();
    push('/plants');
  };

  const handleCancel = () => {
    props.cancelDelete();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <form>
          <div>
            <ModalWarningText>
              Are you sure you want to delete this plant?
            </ModalWarningText>
            <SmallText>This action cannot be undone.</SmallText>
          </div>
          <div>
            <Button onClick={handleCancel}>Cancel</Button>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          </div>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteMovieModal;
