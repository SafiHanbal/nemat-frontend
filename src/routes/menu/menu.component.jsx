import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesNavigation from '../../components/categories-navigation/categories-navigation.components';
import MenuItems from '../../components/menu-items/menu-items.component';

const Menu = () => {
  return (
    <>
      <CategoriesNavigation />
      <Routes>
        <Route index element={<MenuItems />} />
        <Route path=":category" element={<MenuItems />} />
      </Routes>
    </>
  );
};

export default Menu;
