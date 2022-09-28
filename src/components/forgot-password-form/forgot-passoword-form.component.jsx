import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  ForgotPasswordFormContainer,
  ForgotPasswordHeading,
  ForgotPasswordDescription,
  Form,
  ErrorMsg,
} from './forgot-password-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { forgotPasswordStart } from '../../store/user/user.action';
import {
  selectIsLoading,
  selectForgotPasswordError,
  selectIsOptSent,
} from '../../store/user/user.selector';

const defaultFormFields = {
  phone: '',
};

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectForgotPasswordError);
  const isOtpSent = useSelector(selectIsOptSent);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { phone } = formFields;

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(forgotPasswordStart({ phone }));
  };

  useEffect(() => {
    if (isOtpSent) {
      clearFormFields();
      navigate('/auth/reset-password');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOtpSent]);

  return (
    <ForgotPasswordFormContainer>
      <ForgotPasswordHeading>Forgot Password</ForgotPasswordHeading>
      <ForgotPasswordDescription>
        To reset your password, please enter your phone number associated with
        user account. Nemat will send the OTP to the phone for this account.
      </ForgotPasswordDescription>
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          label="Phone"
          type="number"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleOnChange}
        />
        <Button>{isLoading ? <Loader /> : 'Get OTP'}</Button>
      </Form>
    </ForgotPasswordFormContainer>
  );
};

export default ForgotPasswordForm;
