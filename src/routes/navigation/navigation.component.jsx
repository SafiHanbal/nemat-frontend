import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  NavigationContainer,
  LogoContainer,
  Logo,
  NavLinkContainer,
  NavLink,
} from './navigation.styles';

import ShoppingCart from '../../components/shopping-cart/shopping-cart.component';
import Avatar from '../../components/avatar/avatar.component';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink as="div">
            <ShoppingCart />
          </NavLink>
          <NavLink to="menu">Menu</NavLink>
          {currentUser ? (
            <NavLink to="me">
              <Avatar small={true} />
            </NavLink>
          ) : (
            <NavLink to="auth">Login</NavLink>
          )}
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
