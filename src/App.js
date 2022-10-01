import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Menu from './routes/menu/menu.component';
import Me from './routes/me/me.component';
import Checkout from './routes/checkout/checkout.component';
import MenuItem from './routes/menu-item/menu-item.component';

import { checkToken } from './store/user/user.action';
import { selectToken } from './store/user/user.selector';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    if (token) dispatch(checkToken(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth/*" element={<Authentication />} />
        <Route path="menu/*" element={<Menu />} />
        <Route path=":menuItem" element={<MenuItem />} />
        <Route path="me/*" element={<Me />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
