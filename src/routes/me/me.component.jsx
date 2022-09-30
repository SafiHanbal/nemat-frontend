import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MeContainer } from './me.styles';

import SideNav from '../../components/side-nav/side-nav.componenet';
import UserSettings from '../../components/user-settings/user-settings.component';
import UserOrders from '../../components/user-orders/user-orders.component';
import Logout from '../../components/logout/logout.component';

const Me = () => {
  return (
    <MeContainer>
      <SideNav />
      <Routes>
        <Route index element={<UserSettings />} />
        <Route path="orders" element={<UserOrders />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </MeContainer>
  );
};

export default Me;
