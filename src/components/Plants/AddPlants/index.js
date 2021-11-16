import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { H2, Form, Label, Input, Button } from "../../FormStyledComponents";

const AddPlants = (props) => {
  const { push } = useHistory();

  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    h20frequency: "",
    image: "",
  });

  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://water-my-plants-7-ft.herokuapp.com/api/plants`, plant)
      .then((res) => {
        props.setPlants(res.data);
        push(`/plants`);
      })
      .catch((err) => console.log(err));
  };

  const { nickname, species, h20frequency } = plant;

  return (
    <>
      {/* <h1>Add Plants Form goes here</h1> */}
      <Form onSubmit={handleSubmit}>
        <H2>Add Plants</H2>
        <Label>
          Plant Name:
          <Input
            name="nickname"
            type="text"
            value={nickname}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Plant Species:
          <Input
            name="species"
            type="text"
            value={species}
            onChange={handleChange}
          />
        </Label>
        <Label>
          H20 Frequency:
          <Input
            name="h20frequency"
            type="text"
            value={h20frequency}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Photo:
          <Button>Add Photo</Button>
        </Label>
        <Button>Add Plant</Button>
      </Form>
    </>
  );
};

export default AddPlants;
