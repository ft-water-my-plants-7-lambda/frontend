import React from "react";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 0 20%;
  text-align: center;
`;

const AddPlants = () => {
  return (
    <>
      {/* <h1>Add Plants Form goes here</h1> */}
      <Form>
        <h2>Add Plants</h2>
        <label>
          Plant Name:
          <input name="name" type="text" />
        </label>
        <label>
          Plant Species:
          <input name="species" type="text" />
        </label>
        <label>
          H20 Frequency:
          <input name="h20freq" type="text" />
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
