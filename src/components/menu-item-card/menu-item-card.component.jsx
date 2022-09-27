import React from 'react';

import Image from '../../assets/achari-paneer-tikka-shaslik-small.jpg';
import VegImage from '../../assets/veg-icon.png';
import StarIcon from '../../assets/star.png';
import ServingIcon from '../../assets/serving.png';

import {
  MenuItemCardContainer,
  MenuItemImage,
  VegSticker,
  DescriptionHeader,
  DescriptionContainer,
  Name,
  Price,
  DescriptionBody,
  Rating,
  Serving,
  ServingText,
  MenuItemLink,
  RatingText,
} from './menu-item-card.styles';

import Button from '../button/button.component';

const MenuItemCard = () => {
  return (
    <MenuItemCardContainer>
      <MenuItemImage src={Image} alt="Menu card image" />
      <VegSticker src={VegImage} alt="Sticker for Veg items" />
      <DescriptionContainer>
        <DescriptionHeader>
          <Name>Achari Paneer Tikka </Name>
          <Price>₹89</Price>
        </DescriptionHeader>
        <DescriptionBody>
          <Rating rating={3}>
            <img src={StarIcon} alt="Star icon" />
            <RatingText>3.4</RatingText>
          </Rating>
          <Serving>
            <img src={ServingIcon} alt="Serving icon" />
            <ServingText>1</ServingText>
          </Serving>
          <MenuItemLink>See More</MenuItemLink>
        </DescriptionBody>
        <Button buttonWidth="100%">Add to Cart</Button>
      </DescriptionContainer>
    </MenuItemCardContainer>
  );
};

export default MenuItemCard;
