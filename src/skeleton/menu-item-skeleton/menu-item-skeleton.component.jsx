import React from 'react';

import {
  ButtonBox,
  ContainerBox,
  NameBox,
  PropertyBox,
  SummaryBox,
} from './menu-item-skeleton.styles';

const MenuItemSkeleton = () => {
  return (
    <ContainerBox>
      <div>
        <NameBox />
        <SummaryBox />
        <PropertyBox />
        <PropertyBox />
        <ButtonBox />
      </div>
    </ContainerBox>
  );
};

export default MenuItemSkeleton;
