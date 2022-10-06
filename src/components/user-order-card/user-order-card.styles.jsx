import styled from 'styled-components';

import {
  colorWhite,
  colorSecondary,
  colorBlackRGB,
  colorPrimary,
  colorPrimaryLight,
} from '../../utils/style-variables/style-variables.utils';

export const UserOrderCardContainer = styled.div`
  background-color: ${colorWhite};
  border-bottom: 4px solid ${colorSecondary};
  border-left: 1px solid ${colorSecondary};
  border-right: 1px solid ${colorSecondary};
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(${colorBlackRGB}, 0.2);
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const CardHeader = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${colorPrimary},
    ${colorPrimaryLight}
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2rem 0.5rem;
`;

export const Date = styled.p`
  color: ${colorWhite};
  font-size: 1.4rem;
  transform: skewX(-10deg);
`;

export const TotalPrice = styled.p`
  color: ${colorWhite};
  font-weight: 700;
  font-size: 2rem;
`;

export const OrderedItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem 2rem 0.5rem;
`;

export const OrderedItem = styled.div`
  display: flex;
`;

export const OrderedItemImage = styled.img`
  width: 9.6rem;
  height: 6.8rem;
  background-size: contain;
`;

export const OrderedItemDescription = styled.div`
  padding: 0 1rem;
`;

export const Property = styled.p`
  font-size: 1.4rem;
  line-height: 1.3;
`;

export const Key = styled.span`
  font-weight: 700;
`;

export const Value = styled.span``;
