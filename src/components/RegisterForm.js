import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { handleRegister } from "../lib/actions/handleRegister";

import { H2, Form, Label, Input, P, Button } from "./FormStyledComponents";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("*Username is required"),
  phoneNumber: yup.string().required("*Phone number is required"),
  password: yup.string().required("*Password is required"),
  // confirmPassword: yup.string().required("*Confirm Password is required"),
});

const initialCredentials = {
  username: "",
  phoneNumber: "",
  password: "",
  // confirmPassword: "",
};

const RegisterForm = ({ handleRegister }) => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState(initialCredentials);

  const [errors, setErrors] = useState({
    username: "",
    phoneNumber: "",
    password: "",
    // confirmPassword: "",
  });

  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormErrors(name, value);
    setCredentials({ ...credentials, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    await handleRegister(credentials);
    push("/login");
  };

  useEffect(() => {
    schema.isValid(credentials).then((valid) => setDisabled(!valid));
  }, [credentials]);

  return (
    <Form onSubmit={submit}>
      <div style={{ color: "red" }}></div>
      <H2>Registration</H2>
      <Label>
        Username:
        <Input
          onChange={change}
          value={credentials.username}
          name="username"
          type="text"
        />
        <P>{errors.username}</P>
      </Label>
      <Label>
        Phone Number:
        <Input
          onChange={change}
          value={credentials.phoneNumber}
          name="phoneNumber"
          type="tel"
        />
        <P>{errors.phoneNumber}</P>
      </Label>
      <Label>
        Password:
        <Input
          onChange={change}
          value={credentials.password}
          name="password"
          type="password"
        />
        <P>{errors.password}</P>
      </Label>
      {/* <Label>
        Confirm Password:
        <Input onChange={change} name="confirmPassword" type="password" />
        <P>{errors.confirmPassword}</P>
      </Label> */}
      <Button disabled={disabled} type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default connect(null, { handleRegister })(RegisterForm);
