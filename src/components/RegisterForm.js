import { useState } from "react";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { handleRegister } from "../lib/actions/handleRegister";

import { H2, Form, Label, Input, Button } from "./FormStyledComponents";

const initialCredentials = { username: "", phoneNumber: "", password: "" };

const RegisterForm = ({ handleRegister }) => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState(initialCredentials);

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    await handleRegister(credentials);
    push("/login");
  };

  return (
    <Form onSubmit={submit}>
      <H2>Registration</H2>
      <Label>
        Username:
        <Input onChange={change} name="username" type="text" />
      </Label>
      <Label>
        Phone Number:
        <Input onChange={change} name="username" type="tel" />
      </Label>
      <Label>
        Password:
        <Input onChange={change} name="password" type="text" />
      </Label>
      <Label>
        Confirm Password:
        <Input onChange={change} name="password" type="text" />
      </Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default connect(null, { handleRegister })(RegisterForm);
