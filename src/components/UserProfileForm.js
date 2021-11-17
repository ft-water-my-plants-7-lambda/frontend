import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { handleUpdateUser } from '../lib/actions/handleUpdateUser';

import { H2, Form, Label, Input, Button } from './FormStyledComponents';

const UserProfileForm = ({ user: userData, handleUpdateUser }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (userData) {
      setUser({
        username: userData.username,
        password: '',
        phoneNumber: userData.phoneNumber,
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(userData.user_id, user);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H2>My Profile</H2>
        <Label>
          Username:
          <Input
            name="username"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            disabled
          />
        </Label>
        <Label>
          Change Password:
          <Input
            name="password"
            type="password"
            placeholder="Enter a new password"
            value={user.password}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Change Phone Number:
          <Input
            name="phoneNumber"
            type="tel"
            placeholder="Enter a new phone number"
            value={user.phoneNumber}
            onChange={handleChange}
          />
        </Label>
        <Button>Update</Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, { handleUpdateUser })(UserProfileForm);
