import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 0 20%;
  text-align: center;
`;

const AddPlants = (props) => {
  const { push } = useHistory();

  const [plant, setPlant] = useState({
    nickname: '',
    species: '',
    h20frequency: '',
    image: '',
  });

  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { name, species, h20frequency } = plant;

  return (
    <>
      {/* <h1>Add Plants Form goes here</h1> */}
      <Form onSubmit={handleSubmit}>
        <h2>Add Plants</h2>
        <label>
          Plant Name:
          <input name='name' type='text' value={name} onChange={handleChange} />
        </label>
        <label>
          Plant Species:
          <input
            name='species'
            type='text'
            value={species}
            onChange={handleChange}
          />
        </label>
        <label>
          H20 Frequency:
          <input
            name='h20frequency'
            type='text'
            value={h20frequency}
            onChange={handleChange}
          />
        </label>
        <label>
          Photo:
          <button>Add Photo</button>
        </label>
        <button>Add Plant</button>
      </Form>
    </>
  );
};

export default AddPlants;
