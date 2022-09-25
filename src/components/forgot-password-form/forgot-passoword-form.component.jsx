import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ForgotPasswordFormContainer,
  ForgotPasswordHeading,
  ForgotPasswordDescription,
  Form,
} from './forgot-password-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { selectIsLoading } from '../../store/user/user.selector';

const defaultFormFields = {
  phone: '',
};

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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

    clearFormFields();
  };
  return (
    <ForgotPasswordFormContainer>
      <ForgotPasswordHeading>Forgot Password</ForgotPasswordHeading>
      <ForgotPasswordDescription>
        To reset your password, please enter your phone number associated with
        user account. Nemat will send the OTP to the phone for this account.
      </ForgotPasswordDescription>
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
