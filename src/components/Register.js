import axios from "axios";
import { useState } from "react";

const initialCredentials = { username: "", /* phoneNumber: "",*/ password: "" };

export default function Register() {
  const [credentials, setCredentials] = useState(initialCredentials);

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://water-my-plants-7-ft.herokuapp.com/api/users/register",
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
      <h2>Registration</h2>
      <label>
        Username:
        <input onChange={change} name="username" type="text" />
      </label>
      {/* <label>
        Phone Number:
        <input></input>
      </label> */}
      <label>
        Password:
        <input onChange={change} name="password" type="text" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
