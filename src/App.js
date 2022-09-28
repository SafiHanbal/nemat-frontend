import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Menu from './routes/menu/menu.component';
import Me from './routes/me/me.component';
import Checkout from './routes/checkout/checkout.component';
import MenuItem from './routes/menu-item/menu-item.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth/*" element={<Authentication />} />
        <Route path="menu/*" element={<Menu />} />
        <Route path=":menuItem" element={<MenuItem />} />
        <Route path="me" element={<Me />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
