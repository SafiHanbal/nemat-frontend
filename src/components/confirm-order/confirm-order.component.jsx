import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Form,
  Heading,
  RadioContainer,
  Label,
  Input,
  RadioButton,
  ConfirmOrderContainer,
  Total,
  AuthLink,
} from './confirm-order.styles';

import Button from '../button/button.component';

import { codOrderStart, cardOrderStart } from '../../store/cart/cart.action';
import {
  selectCartTotal,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const ConfirmOrder = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleOnChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOnClick = () => {
    if (paymentMethod === 'card') dispatch(cardOrderStart(cartItems));
    if (paymentMethod === 'cash-on-delivery')
      dispatch(codOrderStart(cartItems));
  };
  return (
    <>
      <Form>
        <Heading>Select Payment Method</Heading>
        <RadioContainer>
          <Label htmlFor="card">
            Card
            <Input
              type="radio"
              name="payment-method"
              id="card"
              value="card"
              onChange={handleOnChange}
              checked={paymentMethod === 'card'}
            />
            <RadioButton />
          </Label>
        </RadioContainer>
        <RadioContainer>
          <Label htmlFor="cash-on-delivery">
            Cash On Delivery
            <Input
              type="radio"
              name="payment-method"
              id="cash-on-delivery"
              value="cash-on-delivery"
              onChange={handleOnChange}
              checked={paymentMethod === 'cash-on-delivery'}
            />
            <RadioButton />
          </Label>
        </RadioContainer>
      </Form>
      <ConfirmOrderContainer>
        <Total>Total: ₹{cartTotal}</Total>
        {user && cartItems.length !== 0 && (
          <Button onClick={handleOnClick}>Confirm Order</Button>
        )}
        {user && cartItems.length === 0 && (
          <AuthLink to="/menu">
            <Button>Select Items</Button>
          </AuthLink>
        )}
        {!user && (
          <AuthLink to="/auth">
            <Button>Login to Order</Button>
          </AuthLink>
        )}
      </ConfirmOrderContainer>
    </>
  );
};

export default ConfirmOrder;
