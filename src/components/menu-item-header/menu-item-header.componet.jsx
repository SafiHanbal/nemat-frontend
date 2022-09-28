import React from 'react';
import { useSelector } from 'react-redux';

import {
  MenuItemContanier,
  Name,
  Summary,
  DescriptionContainer,
  DescriptionEl,
  DescriptionKey,
  DescriptionValue,
  ButtonContainer,
} from './menu-item-header.styles';

import Button from '../../components/button/button.component';
import Image from '../../assets/achari-paneer-tikka-shaslik-large.jpg';

import { selectCurrentMenuItem } from '../../store/menu/menu.selector';

const MenuItemHeader = () => {
  const currentMenuItem = useSelector(selectCurrentMenuItem);
  const {
    name,
    description,
    price,
    isNonVeg,
    ratingsAverage,
    ratingsCount,
    servings,
    image,
  } = currentMenuItem;

  console.log(currentMenuItem, currentMenuItem.name);

  return (
    <MenuItemContanier image={image?.large || Image}>
      <div>
        <Name>{name}</Name>
        <Summary>{description}</Summary>
        <DescriptionContainer>
          <DescriptionEl>
            <DescriptionKey>Price:</DescriptionKey>
            <DescriptionValue>₹ {price}</DescriptionValue>
          </DescriptionEl>
          <DescriptionEl>
            <DescriptionKey>Rating:</DescriptionKey>
            <DescriptionValue>
              {ratingsCount
                ? `${ratingsAverage} (${ratingsCount})`
                : 'Not Rated'}
            </DescriptionValue>
          </DescriptionEl>
          <DescriptionEl>
            <DescriptionKey>Servings:</DescriptionKey>
            <DescriptionValue>{servings}</DescriptionValue>
          </DescriptionEl>
          <DescriptionEl>
            <DescriptionKey>{isNonVeg ? 'Non-Veg' : 'Veg'}</DescriptionKey>
            <DescriptionValue></DescriptionValue>
          </DescriptionEl>
        </DescriptionContainer>
        <ButtonContainer>
          <Button>Add to Cart</Button>
        </ButtonContainer>
      </div>
    </MenuItemContanier>
  );
};

export default MenuItemHeader;
