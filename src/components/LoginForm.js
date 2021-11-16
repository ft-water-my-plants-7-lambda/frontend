import { useState } from "react";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { handleLogin } from "../lib/actions/handleLogin";
import { H2, Form, Label, Input, Button, A } from "./FormStyledComponents";

const initialCredentials = { username: "", password: "" };

const LoginForm = ({ handleLogin }) => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState(initialCredentials);

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    await handleLogin(credentials);
    push("/plants");
  };

  return (
    <Form onSubmit={submit}>
      <H2>Login</H2>

      <Label>
        Username:
        <Input
          onChange={change}
          value={credentials.username}
          name="username"
          type="text"
        />
      </Label>

      <Label>
        Password:
        <Input
          onChange={change}
          value={credentials.password}
          name="password"
          type="password"
        />
      </Label>
      <A href="#">Forgot Password?</A>
      <Button>Login</Button>
    </Form>
  );
};

export default connect(null, { handleLogin })(LoginForm);
