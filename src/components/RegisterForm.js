import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { connect } from 'react-redux';
import { handleRegister } from '../lib/actions/handleRegister';

import { H2, Form, Label, Input, P, Button } from './FormStyledComponents';
import * as yup from 'yup';

const initialCredentials = {
  username: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const schema = yup.object().shape({
  username: yup.string().required('*Username is required'),
  phoneNumber: yup.string().required('*Phone number is required'),
  password: yup.string().required('*Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '*Passwords must match'),
});

const RegisterForm = ({ handleRegister }) => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState(initialCredentials);

  const [errors, setErrors] = useState({
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [touched, setTouched] = useState({
    username: false,
    phoneNumber: false,
    password: false,
    confirm: false,
  });

  const [disabled, setDisabled] = useState(true);

  // const setFormErrors = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => setErrors({ ...errors, [name]: "" }))
  //     .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  // };

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // setFormErrors(name, value);
    setTouched({ ...touched, [name]: true });

    setCredentials({ ...credentials, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    let userObj = {
      username: credentials.username,
      phoneNumber: credentials.phoneNumber,
      password: credentials.password,
    };

    await handleRegister(userObj);
    push('/login');
  };

  useEffect(() => {
    yup
      .reach(schema)
      .validate(credentials, { abortEarly: false })
      .then(() => setErrors({}))
      .catch((err) => {
        const errors = {};
        err.inner.forEach((error) => {
          if (touched[error.path]) errors[error.path] = error.message;
        });
        setErrors(errors);
      });

    schema.isValid(credentials).then((valid) => setDisabled(!valid));
  }, [credentials]);

  return (
    <Form onSubmit={submit}>
      <div style={{ color: 'red' }}></div>
      <H2>Registration</H2>
      <Label>
        Username:
        <Input
          onChange={change}
          value={credentials.username}
          name='username'
          type='text'
          placeholder='Enter Username'
        />
        <P>{errors.username}</P>
      </Label>
      <Label>
        Phone Number:
        <Input
          onChange={change}
          value={credentials.phoneNumber}
          name='phoneNumber'
          type='text'
          placeholder='Enter Phone Number'
        />
        <P>{errors.phoneNumber}</P>
      </Label>
      <Label>
        Password:
        <Input
          onChange={change}
          value={credentials.password}
          name='password'
          type='password'
          placeholder='Enter Password'
        />
        <P>{errors.password}</P>
      </Label>
      <Label>
        Confirm Password:
        <Input
          onChange={change}
          value={credentials.confirmPassword}
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
        />
        <P>{errors.confirmPassword}</P>
      </Label>
      <Button disabled={disabled} type='submit'>
        Sign Up
      </Button>
    </Form>
  );
};

export default connect(null, { handleRegister })(RegisterForm);
