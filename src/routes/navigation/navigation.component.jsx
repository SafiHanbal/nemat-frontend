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
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="checkout">
            <ShoppingCart />
          </NavLink>
          <NavLink to="menu">Menu</NavLink>
          {user ? (
            <NavLink to="me">
              <Avatar small={true} image={user.photo} />
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
