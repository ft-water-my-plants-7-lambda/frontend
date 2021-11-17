import React, { useState, useEffect } from 'react';

import { H2, Form, Label, Input, Button } from './FormStyledComponents';

const UserProfileForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    phoneNumber: '',
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { username, password, phoneNumber } = user;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H2>My Profile</H2>
        <Label>
          Username:
          <Input
            name='username'
            type='text'
            value={username}
            placeholder='Username'
            onChange={handleChange}
            disabled
          />
        </Label>
        <Label>
          Change Password:
          <Input
            name='password'
            type='password'
            value={password}
            placeholder='Enter a new password'
            onChange={handleChange}
          />
        </Label>
        <Label>
          Change Phone Number:
          <Input
            name='phoneNumber'
            type='tel'
            value={phoneNumber}
            placeholder='Enter a new phone number'
            onChange={handleChange}
          />
        </Label>
        <Button>Save</Button>
      </Form>
    </>
  );
};

export default UserProfileForm;
