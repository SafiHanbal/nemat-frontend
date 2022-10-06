import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MenuItemContainer,
  Image,
  DescriptionContainer,
  Name,
  Paragraph,
  Property,
  Value,
  RemoveButton,
} from './checkout-item.styles';

import { removeFromCartStart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ checkoutItemData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { image, name, price, quantity, servings } = checkoutItemData;

  const handleOnClick = () => {
    dispatch(
      removeFromCartStart({ cartItems, itemToRemove: checkoutItemData })
    );
  };

  return (
    <MenuItemContainer>
      <Image src={image.small} alt={`${name} image`} />
      <DescriptionContainer>
        <Name>{name}</Name>
        <Paragraph>
          <Property>Price: </Property>
          <Value>₹ {price}</Value>
        </Paragraph>
        <Paragraph>
          <Property>Quantity: </Property>
          <Value>{quantity}</Value>
        </Paragraph>
        <Paragraph>
          <Property>Servings per Quantitiy: </Property>
          <Value>{servings}</Value>
        </Paragraph>
        <RemoveButton onClick={handleOnClick}>Remove</RemoveButton>
      </DescriptionContainer>
    </MenuItemContainer>
  );
};

export default CheckoutItem;
