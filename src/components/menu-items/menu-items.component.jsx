import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MenuItemsContainer } from './menu-items.styles';

import MenuItemCard from '../menu-item-card/menu-item-card.component';
import MenuItemCardSkeleton from '../menu-item-card-skeleton/menu-item-card-skeleton.component';

import {
  fetchMenuStart,
  changeDisplayItems,
} from '../../store/menu/menu.action';
import { selectDisplayItems, selectMenu } from '../../store/menu/menu.selector';

import { defaultDisplayItems } from '../../utils/default-display-items/default-display-items';

const MenuItems = () => {
  const category = useParams().category || 'starter';

  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const menuData = useSelector(selectDisplayItems);
  const shimmer = menuData[0] && menuData[0]?.id === 1;

  useEffect(() => {
    if (
      menu[category === 'main-course' ? 'mainCourse' : category].length === 0
    ) {
      dispatch(fetchMenuStart({ category, displayItems: defaultDisplayItems }));
    } else {
      dispatch(changeDisplayItems({ category, displayItems: menu[category] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MenuItemsContainer>
      {shimmer && menuData.map(({ id }) => <MenuItemCardSkeleton key={id} />)}
      {menuData[0] &&
        !shimmer &&
        menuData.map((item) => <MenuItemCard key={item.id} data={item} />)}
    </MenuItemsContainer>
  );
};

export default MenuItems;
