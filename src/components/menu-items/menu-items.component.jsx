import React from 'react';
import { useParams } from 'react-router-dom';

import { MenuItemsContainer } from './menu-items.styles';

import MenuItemCard from '../menu-item-card/menu-item-card.component';
import MenuItemCardSkeleton from '../../skeleton-shimmer/menu-item-card-skeleton/menu-item-card-skeleton.component';

const MenuItems = () => {
  const category = useParams().category || 'starter';

  return (
    <MenuItemsContainer>
      <MenuItemCard />
      <MenuItemCardSkeleton />
    </MenuItemsContainer>
  );
};

export default MenuItems;
