import React from 'react';

import {
  UserOrderCardContainer,
  CardHeader,
  Date,
  TotalPrice,
  OrderedItemContainer,
  OrderedItem,
  OrderedItemImage,
  OrderedItemDescription,
  Property,
  Key,
  Value,
} from './user-order-card.styles';

import { getDate } from '../../utils/get-date/get-date';

const UserOrderCard = ({ orderData }) => {
  const { menuItems, orderedAt, totalPrice } = orderData;

  return (
    <UserOrderCardContainer>
      <CardHeader>
        <Date>{getDate(orderedAt)}</Date>
        <TotalPrice>Total: ₹{totalPrice}</TotalPrice>
      </CardHeader>
      <OrderedItemContainer>
        {menuItems.map((item) => (
          <OrderedItem key={item._id}>
            <OrderedItemImage src={item.menuItem.image.small} />
            <OrderedItemDescription>
              <Property>
                <Key>Name: </Key>
                <Value>{item.menuItem.name}</Value>
              </Property>
              <Property>
                <Key>Price: </Key>
                <Value>₹{item.menuItem.price}</Value>
              </Property>
              <Property>
                <Key>Quantity: </Key>
                <Value>{item.quantity}</Value>
              </Property>
            </OrderedItemDescription>
          </OrderedItem>
        ))}
      </OrderedItemContainer>
    </UserOrderCardContainer>
  );
};

export default UserOrderCard;
