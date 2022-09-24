import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  SignUpFormContainer,
  SignupHeading,
  AddressInputsContaier,
  HouseInputContainer,
  AreaInputContainer,
  CityInputContainer,
  PinCodeInputContainer,
  LoginLinkParagraph,
  LoginLink,
} from './signup-form.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { signUpStart } from '../../store/user/user.action';
import { selectIsLoading } from '../../store/user/user.selector';

const defaultFormFields = {
  name: '',
  phone: '',
  house: '',
  area: '',
  city: '',
  pinCode: '',
  password: '',
  passwordConfirm: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, phone, house, area, city, pinCode, password, passwordConfirm } =
    formFields;

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHadler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(signUpStart(formFields));
    clearFormFields();
  };

  return (
    <SignUpFormContainer>
      <SignupHeading>SignUp</SignupHeading>
      <Form onSubmit={onSubmitHandler}>
        <FormInput
          label="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChangeHadler}
        />
        <FormInput
          label="Phone"
          type="number"
          id="phone"
          name="phone"
          value={phone}
          onChange={onChangeHadler}
        />

        <AddressInputsContaier>
          <HouseInputContainer>
            <FormInput
              label="House"
              type="text"
              id="house"
              name="house"
              value={house}
              onChange={onChangeHadler}
            />
          </HouseInputContainer>
          <AreaInputContainer>
            <FormInput
              label="Area"
              type="text"
              id="area"
              name="area"
              value={area}
              onChange={onChangeHadler}
            />
          </AreaInputContainer>
          <CityInputContainer>
            <FormInput
              label="City"
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={onChangeHadler}
            />
          </CityInputContainer>
          <PinCodeInputContainer>
            <FormInput
              label="Pin Code"
              type="number"
              id="pinCode"
              name="pinCode"
              value={pinCode}
              onChange={onChangeHadler}
            />
          </PinCodeInputContainer>
        </AddressInputsContaier>

        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChangeHadler}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChangeHadler}
        />

        <Button>{isLoading ? <Loader /> : 'Sign Up'}</Button>
      </Form>
      <LoginLinkParagraph>
        Already have an account!
        <LoginLink to="/auth"> Login</LoginLink>
      </LoginLinkParagraph>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
