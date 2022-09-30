import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  SideNavContainer,
  UserSettingsContainer,
  NavLink,
  Heading,
  AdminSettingsContainer,
} from './side-nav.styles';

import { setActiveSetting } from '../../store/me/me.action';
import { selectActiveSetting } from '../../store/me/me.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeSetting = useSelector(selectActiveSetting);
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(setActiveSetting('home'));
    if (!user) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const updateActiveSetting = (event) => {
    const { setting } = event.target.dataset;
    dispatch(setActiveSetting(setting));
  };

  return (
    <SideNavContainer>
      <UserSettingsContainer>
        <Heading>User Settings</Heading>
        <NavLink
          to="/me"
          data-setting="home"
          active={activeSetting === 'home' ? 1 : 0}
          onClick={updateActiveSetting}
        >
          Home
        </NavLink>
        <NavLink
          to="orders"
          data-setting="orders"
          active={activeSetting === 'orders' ? 1 : 0}
          onClick={updateActiveSetting}
        >
          Orders
        </NavLink>
        <NavLink>Help</NavLink>
        <NavLink
          to="logout"
          data-setting="logout"
          active={activeSetting === 'logout' ? 1 : 0}
          onClick={updateActiveSetting}
        >
          Log Out
        </NavLink>
      </UserSettingsContainer>
      {user?.role !== 'user' && (
        <AdminSettingsContainer>
          <Heading>Admin Settings</Heading>
          <NavLink>Manage Order</NavLink>
          <NavLink>Manage Menu Items</NavLink>
          <NavLink>Stats</NavLink>
        </AdminSettingsContainer>
      )}
    </SideNavContainer>
  );
};

export default SideNav;
