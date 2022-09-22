import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavigationContainer,
  LogoContainer,
  Logo,
  NavLinkContainer,
  NavLink,
} from './navigation.styles';

import ShoppingCart from '../../components/shopping-cart/shopping-cart.component';
import Avatar from '../../components/avatar/avatar.component';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="menu">Menu</NavLink>
          <NavLink as="div">
            <ShoppingCart />
          </NavLink>
          <NavLink to="me">
            <Avatar />
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
