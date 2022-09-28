import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  LoginHeading,
  LoginFormContainer,
  Form,
  ForgotPasswordLink,
  SignUpLinkParagraph,
  SingUpLink,
  ErrorMsg,
} from './login-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { loginStart } from '../../store/user/user.action';
import {
  selectIsLoading,
  selectLoginError,
  selectCurrentUser,
} from '../../store/user/user.selector';

const defaultFormFields = {
  phone: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectLoginError);
  const user = useSelector(selectCurrentUser);

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
  };

  useEffect(() => {
    if (user) {
      clearFormFields();
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LoginFormContainer>
      <LoginHeading>Login</LoginHeading>
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
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
        <ForgotPasswordLink to="forgot-password">
          Forgot Password?
        </ForgotPasswordLink>
      </Form>
      <SignUpLinkParagraph>
        Don't have an account.
        <SingUpLink to="signup"> SignUp</SingUpLink>
      </SignUpLinkParagraph>
    </LoginFormContainer>
  );
};

export default LoginForm;
