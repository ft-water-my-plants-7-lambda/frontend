import axios from "axios";
import { useState } from "react";

const initialCredentials = { username: "", password: "" };

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [credentials, setCredentials] = useState(initialCredentials);

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(e.target.value);
    console.log(e.target.name);

    setCredentials({ ...credentials, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://water-my-plants-7-ft.herokuapp.com/api/users/login",
        credentials
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <label>
        Username:
        <input onChange={change} name="username" type="text" />
      </label>
      <label>
        Password:
        <input onChange={change} name="password" type="text" />
      </label>
      <button type="submit">Login</button>
      <button>Forgot Password?</button>
    </form>
  );
}
