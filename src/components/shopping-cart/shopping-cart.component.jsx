import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartIconContainer, CartIcon, CartCount } from './shopping-cart.styles';
import { toggleCartDropdown } from '../../store/cart/cart.action';
import { selectIsCartActive } from '../../store/cart/cart.selector';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const isCartActive = useSelector(selectIsCartActive);
  const handleToggleCartDropdown = () =>
    dispatch(toggleCartDropdown(!isCartActive));

  return (
    <CartIconContainer onClick={handleToggleCartDropdown}>
      <CartIcon />
      <CartCount>20</CartCount>
    </CartIconContainer>
  );
};

export default ShoppingCart;
