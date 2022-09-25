import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  AuthenticationContainer,
  AuthenticationPageImage,
} from './authentication.styles';

import LoginForm from '../../components/login-form/login-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';
import ForgotPasswordForm from '../../components/forgot-password-form/forgot-passoword-form.component';
import ResetPasswordForm from '../../components/reset-password-form/reset-password-form.component';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <AuthenticationPageImage />
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="forgot-password" element={<ForgotPasswordForm />} />
        <Route path="reset-password" element={<ResetPasswordForm />} />
      </Routes>
    </AuthenticationContainer>
  );
};

export default Authentication;
