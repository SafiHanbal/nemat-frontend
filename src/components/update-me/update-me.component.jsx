import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Heading, Form, Error } from './update-me.styles';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { updateMeStart } from '../../store/me/me.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  selectUpdateMeLoading,
  selectUpdateMeError,
} from '../../store/me/me.selector';

const defaultFormFields = {
  name: '',
  phone: '',
  email: '',
  house: '',
  area: '',
  city: '',
  pinCode: '',
};

const UpdateMe = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUpdateMeLoading);
  const error = useSelector(selectUpdateMeError);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { name, phone, email, house, area, city, pinCode } = formFields;

  useEffect(() => {
    if (user) {
      setFormFields({
        name: user.name,
        phone: user.phone,
        email: user.email,
        house: user.address.house,
        area: user.address.area,
        city: user.address.city,
        pinCode: user.address.pinCode,
      });
    }
  }, [user]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateMeStart({
        name,
        phone,
        email,
        address: { house, area, city, pinCode },
      })
    );
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Heading>Update Me</Heading>
      {error && <Error>{error.message}</Error>}
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          label="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleOnChange}
        />
        <FormInput
          label="Phone"
          type="number"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleOnChange}
        />
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <span></span>
        <FormInput
          label="House"
          type="text"
          id="house"
          name="house"
          value={house}
          onChange={handleOnChange}
        />
        <FormInput
          label="Area"
          type="text"
          id="area"
          name="area"
          value={area}
          onChange={handleOnChange}
        />
        <FormInput
          label="City"
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleOnChange}
        />
        <FormInput
          label="Pin Code"
          type="number"
          id="pinCode"
          name="pinCode"
          value={pinCode}
          onChange={handleOnChange}
        />
        <Button>{isLoading ? <Loader /> : 'Update'}</Button>
      </Form>
    </>
  );
};

export default UpdateMe;
