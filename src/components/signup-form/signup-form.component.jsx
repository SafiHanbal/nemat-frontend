import React, { useState } from 'react';

import { Form, SignUpFormContainer, SignupHeading } from './signup-form.styles';

const SignUpForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <SignUpFormContainer>
      <SignupHeading>SignUp</SignupHeading>
      <Form onSubmit={onSubmitHandler}></Form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
