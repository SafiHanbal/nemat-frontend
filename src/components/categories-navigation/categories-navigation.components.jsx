import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CategoriesNavigationContainer,
  CategoryLink,
} from './categories-navigation.styles';

import {
  fetchMenuStart,
  changeDisplayItems,
} from '../../store/menu/menu.action';
import { defaultDisplayItems } from '../../utils/default-display-items/default-display-items';
import { selectMenu, selectCategory } from '../../store/menu/menu.selector';

let CATEGORIES = [
  {
    id: 'starter',
    name: 'Starter',
    isActive: true,
  },
  {
    id: 'main-course',
    name: 'Main Course',
    isActive: false,
  },
  {
    id: 'bread',
    name: 'Bread',
    isActive: false,
  },
  {
    id: 'rice',
    name: 'Rice',
    isActive: false,
  },
  {
    id: 'desert',
    name: 'Desert',
    isActive: false,
  },
  {
    id: 'sides',
    name: 'Sides',
    isActive: false,
  },
];

const CategoriesNavigation = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const category = useSelector(selectCategory);

  const updateActiveCategory = (event) => {
    if (menu[event.target.dataset?.category].length === 0) {
      dispatch(
        fetchMenuStart({
          category: event.target.dataset.category,
          displayItems: defaultDisplayItems,
        })
      );
    } else {
      dispatch(
        changeDisplayItems({
          category: event.target.dataset.category,
          displayItems: menu[event.target.dataset.category],
        })
      );
    }
  };

  return (
    <CategoriesNavigationContainer>
      {CATEGORIES.map(({ id, name, isActive }) => (
        <CategoryLink
          key={id}
          to={id}
          onClick={updateActiveCategory}
          data-category={id}
          active={category === id ? 1 : 0}
        >
          {name}
        </CategoryLink>
      ))}
    </CategoriesNavigationContainer>
  );
};

export default CategoriesNavigation;
