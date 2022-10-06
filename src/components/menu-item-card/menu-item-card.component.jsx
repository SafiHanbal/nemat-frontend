import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { addToCartStart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const MenuItemCard = ({ menuItemData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const {
    image,
    isNonVeg,
    name,
    price,
    ratingsAverage,
    ratingsCount,
    servings,
    slug,
  } = menuItemData;

  const handleOnClick = (event) => {
    dispatch(addToCartStart({ cartItems, itemToAdd: menuItemData }));
  };

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
          <MenuItemLink to={`/${slug}`}>See More</MenuItemLink>
        </DescriptionBody>
        <Button buttonWidth="100%" onClick={handleOnClick}>
          Add to Cart
        </Button>
      </DescriptionContainer>
    </MenuItemCardContainer>
  );
};

export default MenuItemCard;
