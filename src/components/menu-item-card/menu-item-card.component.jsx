import React from 'react';

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

const MenuItemCard = ({ data }) => {
  const {
    image,
    isNonVeg,
    name,
    price,
    ratingsAverage,
    ratingsCount,
    servings,
  } = data;

  return (
    <MenuItemCardContainer>
      <MenuItemImage src={image.small} alt="Menu card image" />
      {!isNonVeg && <VegSticker src={VegImage} alt="Sticker for Veg items" />}
      <DescriptionContainer>
        <DescriptionHeader>
          <Name>{name}</Name>
          <Price>₹{price}</Price>
        </DescriptionHeader>
        <DescriptionBody>
          <Rating rating={ratingsAverage}>
            {ratingsCount !== 0 && <img src={StarIcon} alt="Star icon" />}
            <RatingText>
              {ratingsCount
                ? `${ratingsAverage} (${ratingsCount})`
                : 'Not Rated'}
            </RatingText>
          </Rating>
          <Serving>
            <img src={ServingIcon} alt="Serving icon" />
            <ServingText>{servings}</ServingText>
          </Serving>
          <MenuItemLink>See More</MenuItemLink>
        </DescriptionBody>
        <Button buttonWidth="100%">Add to Cart</Button>
      </DescriptionContainer>
    </MenuItemCardContainer>
  );
};

export default MenuItemCard;
