import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { H2, Form, Label, Input, Button } from '../../FormStyledComponents';

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

  const showWidget = (widget) => {
    widget.open();
  };

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dnaaop75s',
      uploadPreset: 'soj1jqqs',
      autoUpload: false,
    },
    (error, result) => {
      if (!error && result && result.event === 'success') {
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

  const { nickname, species, h20frequency, image } = plant;

  return (
    <>
      {/* <h1>Add Plants Form goes here</h1> */}
      <Form onSubmit={handleSubmit}>
        <H2>Add Plants</H2>
        <Label>
          Plant Name:
          <Input name="nickname" type="text" value={nickname} onChange={handleChange} />
        </Label>
        <Label>
          Plant Species:
          <Input name="species" type="text" value={species} onChange={handleChange} />
        </Label>
        <Label>
          H20 Frequency:
          <Input name="h20frequency" type="text" value={h20frequency} onChange={handleChange} />
        </Label>
        <Label>
          Photo:
          <Button onClick={handleClick}>Add Photo</Button>
        </Label>
        <Button>Add Plant</Button>
      </Form>
    </>
  );
};

export default AddPlants;
