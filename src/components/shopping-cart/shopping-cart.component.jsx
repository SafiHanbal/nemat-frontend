import React from 'react';

import { CartIconContainer, CartIcon, CartCount } from './shopping-cart.styles';

const ShoppingCart = () => {
  return (
    <CartIconContainer>
      <CartIcon />
      <CartCount>20</CartCount>
    </CartIconContainer>
  );
};

export default ShoppingCart;
