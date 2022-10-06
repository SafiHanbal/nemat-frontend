import React from 'react';

import {
  SkeletonContainer,
  CardHeader,
  DateBox,
  PriceBox,
  ItemContainer,
  OrderedItem,
  ImageBox,
  Description,
  TextBox,
  TextBoxShort,
} from './user-order-card-skeleton';

const UserOrderCardSkeleton = () => {
  return (
    <SkeletonContainer>
      <CardHeader>
        <DateBox />
        <PriceBox />
      </CardHeader>
      <ItemContainer>
        <OrderedItem>
          <ImageBox />
          <Description>
            <TextBox />
            <TextBox />
            <TextBoxShort />
          </Description>
        </OrderedItem>
        <OrderedItem>
          <ImageBox />
          <Description>
            <TextBox />
            <TextBox />
            <TextBoxShort />
          </Description>
        </OrderedItem>
        <OrderedItem>
          <ImageBox />
          <Description>
            <TextBox />
            <TextBox />
            <TextBoxShort />
          </Description>
        </OrderedItem>
        <OrderedItem>
          <ImageBox />
          <Description>
            <TextBox />
            <TextBox />
            <TextBoxShort />
          </Description>
        </OrderedItem>
      </ItemContainer>
    </SkeletonContainer>
  );
};

export default UserOrderCardSkeleton;
