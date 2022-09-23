import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  AuthenticationContainer,
  AuthenticationPageImage,
} from './authentication.styles';

import LoginForm from '../../components/login-form/login-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <AuthenticationPageImage />
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
    </AuthenticationContainer>
  );
};

export default Authentication;
