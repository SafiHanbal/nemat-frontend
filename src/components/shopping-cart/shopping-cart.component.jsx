import React from 'react';
import { useSelector } from 'react-redux';

import { CartIconContainer, CartIcon, CartCount } from './shopping-cart.styles';
import { selectCartCount } from '../../store/cart/cart.selector';

const ShoppingCart = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <CartIconContainer>
      <CartIcon />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default ShoppingCart;
