import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CheckoutContainer } from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import ConfirmOrder from '../../components/confirm-order/confirm-order.component';

import {
  selectCartItems,
  selectOrderConfirmed,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const orderedConfirmed = useSelector(selectOrderConfirmed);

  useEffect(() => {
    if (orderedConfirmed) {
      navigate('/me/orders');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedConfirmed]);

  return (
    <CheckoutContainer>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItemData={item} />
      ))}
      <ConfirmOrder />
    </CheckoutContainer>
  );
};

export default Checkout;
