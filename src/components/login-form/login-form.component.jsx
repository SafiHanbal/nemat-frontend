import React, { useState } from 'react';

import {
  LoginHeading,
  LoginFormContainer,
  Form,
  SignUpLinkParagraph,
  SingUpLink,
} from './login-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  number: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { number, password } = formFields;

  console.log(formFields);
  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <LoginFormContainer>
      <LoginHeading>Login</LoginHeading>
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          label="Number"
          id="number"
          type="Number"
          name="number"
          value={number}
          onChange={handleOnChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          required
        />
        <Button>Login</Button>
      </Form>
      <SignUpLinkParagraph>
        Don't have an account.
        <SingUpLink to="signup"> SignUp</SingUpLink>
      </SignUpLinkParagraph>
    </LoginFormContainer>
  );
};

export default LoginForm;
