import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  ResetPasswordFormContainer,
  ResetPasswordFormHeading,
  Form,
  ErrorMsg,
} from './reset-password-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { resetPasswordStart } from '../../store/user/user.action';
import {
  selectIsLoading,
  selectCurrentUser,
  selectResetPasswordError,
} from '../../store/user/user.selector';

const defaultFormFields = {
  otp: '',
  password: '',
  passwordConfirm: '',
};

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectResetPasswordError);
  const user = useSelector(selectCurrentUser);

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
    dispatch(resetPasswordStart({ otp, password, passwordConfirm }));
  };

  useEffect(() => {
    if (user) {
      clearFormFields();
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <ResetPasswordFormContainer>
      <ResetPasswordFormHeading>Reset Password</ResetPasswordFormHeading>
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
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
        <Button>{isLoading ? <Loader /> : 'Reset Password'}</Button>
      </Form>
    </ResetPasswordFormContainer>
  );
};

export default ResetPasswordForm;
