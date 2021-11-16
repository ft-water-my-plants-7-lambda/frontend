import { useState } from "react";
import { H2, Form, Label, Input, Button } from "../../FormStyledComponents";

const initialCredentials = { name: "", species: "", frequency: "" };

export default function AddPlantsForm() {
  const [credentials, setCredentials] = useState(initialCredentials);

  const change = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <Form>
      <H2>Add Plants</H2>
      <Label>
        Plant Name:
        <Input onChange={change} name="name" type="text" />
      </Label>
      <Label>
        Plant Species:
        <Input onChange={change} name="species" type="text" />
      </Label>
      <Label>
        H20 Frequency:
        <Input onChange={change} name="frequency" type="text" />
      </Label>
      <Label button>
        Photo:
        <Button>Add Photo</Button>
      </Label>
      <Button type="submit">Add Plant</Button>
    </Form>
  );
}
