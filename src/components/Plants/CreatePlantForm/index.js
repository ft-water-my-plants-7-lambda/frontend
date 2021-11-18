import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { handleCreatePlant } from "../../../lib/actions/handleCreatePlant";

import { H2, Form, Label, Input, Button } from "../../FormStyledComponents";

const CreatePlantForm = ({ handleCreatePlant }) => {
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
    handleCreatePlant(plant);
    push("/plants");
  };

  const showWidget = (widget) => {
    widget.open();
  };

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dnaaop75s",
      uploadPreset: "soj1jqqs",
      autoUpload: false,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setPlant({
          ...plant,
          image: result.info.secure_url,
        });
      }
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    showWidget(widget);
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
            placeholder="Enter Plant Name"
            maxLength="50"
          />
        </Label>
        <Label>
          Plant Species:
          <Input
            name="species"
            type="text"
            value={species}
            onChange={handleChange}
            placeholder="Enter Plant Species"
            maxLength="50"
          />
        </Label>
        <Label>
          H20 Frequency:
          <Input
            name="h20frequency"
            type="text"
            value={h20frequency}
            onChange={handleChange}
            placeholder="Enter Plant H20 Frequency"
            maxLength="50"
          />
        </Label>
        <Label photoLabel>
          Photo:
          <Button onClick={handleClick} photoButton>
            Select Photo
          </Button>
        </Label>
        <Button>Add Plant</Button>
      </Form>
    </>
  );
};

export default connect(null, { handleCreatePlant })(CreatePlantForm);
