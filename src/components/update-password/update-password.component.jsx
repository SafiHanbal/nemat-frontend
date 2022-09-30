import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Heading, Form, Error } from './update-password.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { updatePasswordStart } from '../../store/me/me.action';
import {
  selectUpdtatePasswordLoading,
  selectUpdtatePasswordError,
} from '../../store/me/me.selector';

const defaultFormFields = {
  passwordCurrent: '',
  password: '',
  passwordConfirm: '',
};

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUpdtatePasswordLoading);
  const error = useSelector(selectUpdtatePasswordError);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { passwordCurrent, password, passwordConfirm } = formFields;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePasswordStart(formFields));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  useEffect(() => {
    if (!error && !isLoading) {
      clearFormFields();
    }
  }, [isLoading, error]);

  return (
    <>
      <Heading>Update Password</Heading>
      {error && <Error>{error.message}</Error>}
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          label="Current Password"
          type="password"
          id="passwordCurrent"
          name="passwordCurrent"
          value={passwordCurrent}
          onChange={handleOnChange}
        />
        <FormInput
          label="New Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        <FormInput
          label="Confirm New Password"
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleOnChange}
        />
        <Button>{isLoading ? <Loader /> : 'Update Password'}</Button>
      </Form>
    </>
  );
};

export default UpdatePassword;
