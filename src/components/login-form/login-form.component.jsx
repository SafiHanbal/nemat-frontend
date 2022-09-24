import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  LoginHeading,
  LoginFormContainer,
  Form,
  SignUpLinkParagraph,
  SingUpLink,
} from './login-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { loginStart } from '../../store/user/user.action';
import { selectIsLoading } from '../../store/user/user.selector';

const defaultFormFields = {
  phone: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { phone, password } = formFields;

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(loginStart(formFields));
    clearFormFields();
  };

  return (
    <LoginFormContainer>
      <LoginHeading>Login</LoginHeading>
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          label="Phone"
          id="phone"
          type="Number"
          name="phone"
          value={phone}
          onChange={handleOnChange}
          required
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          required
        />
        <Button>{isLoading ? <Loader /> : 'Login'}</Button>
      </Form>
      <SignUpLinkParagraph>
        Don't have an account.
        <SingUpLink to="signup"> SignUp</SingUpLink>
      </SignUpLinkParagraph>
    </LoginFormContainer>
  );
};

export default LoginForm;
