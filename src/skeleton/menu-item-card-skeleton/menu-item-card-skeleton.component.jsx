import React from 'react';

import {
  SkeletonContainer,
  ImageBox,
  DescriptionContainer,
  HeaderBox,
  DescriptionBodyBox,
  ButtonBox,
} from './menu-item-card-skeleton.styles';

const MenuItemCardSkeleton = () => {
  return (
    <SkeletonContainer>
      <ImageBox />
      <DescriptionContainer>
        <HeaderBox />
        <DescriptionBodyBox />
        <ButtonBox />
      </DescriptionContainer>
    </SkeletonContainer>
  );
};

export default MenuItemCardSkeleton;
