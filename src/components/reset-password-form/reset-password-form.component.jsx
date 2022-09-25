import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ResetPasswordFormContainer,
  ResetPasswordFormHeading,
  Form,
} from './reset-password-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { selectIsLoading } from '../../store/user/user.selector';

const defaultFormFields = {
  otp: '',
  password: '',
  passwordConfirm: '',
};

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { otp, password, passwordConfirm } = formFields;

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    clearFormFields();
  };

  return (
    <ResetPasswordFormContainer>
      <ResetPasswordFormHeading>Reset Password</ResetPasswordFormHeading>
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          label="OTP"
          type="number"
          id="otp"
          name="otp"
          value={otp}
          onChange={handleOnChange}
        />
        <FormInput
          label="New Password"
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        <FormInput
          label="Confirm New Password"
          type="text"
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleOnChange}
        />
        <Button>{isLoading ? <Loader /> : 'Reset Password'}</Button>
      </Form>
    </ResetPasswordFormContainer>
  );
};

export default ResetPasswordForm;
