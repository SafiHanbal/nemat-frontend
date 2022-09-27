import React from 'react';

import {
  CategoriesNavigationContainer,
  CategoryLink,
} from './categories-navigation.styles';

let CATEGORIES = [
  {
    id: 'starter',
    name: 'Starter',
    isActive: true,
  },
  {
    id: 'main-couse',
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
  const updateActiveCategory = (event) => {
    console.log(event.target.textContent);
    CATEGORIES = [
      ...CATEGORIES.map((category) => ({
        ...category,
        isActive: false,
      })),
    ];
  };

  return (
    <CategoriesNavigationContainer>
      {CATEGORIES.map(({ id, name, isActive }) => (
        <CategoryLink
          key={id}
          to={id}
          active={isActive ? 1 : 0}
          onClick={updateActiveCategory}
        >
          {name}
        </CategoryLink>
      ))}
    </CategoriesNavigationContainer>
  );
};

export default CategoriesNavigation;
