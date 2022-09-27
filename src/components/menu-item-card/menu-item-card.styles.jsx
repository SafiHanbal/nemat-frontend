import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorBlackRGB,
  colorGrayDark2,
  colorWhite,
  colorPrimary,
  colorPrimaryDark,
  colorSecondary,
  colorOrange,
} from '../../utils/style-variables/style-variables.utils';

const getBackgorundColor = (rating) => {
  if (rating >= 4 && rating <= 5) return colorSecondary;
  if (rating >= 2.5 && rating < 4) return colorOrange;
  if (rating < 2.5) return colorPrimaryDark;
};

export const MenuItemCardContainer = styled.div`
  position: relative;
  background-color: ${colorWhite};
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(${colorBlackRGB}, 0.5);
`;

export const MenuItemImage = styled.img`
  width: 100%;
  height: 17rem;
  background-size: cover;
`;

export const VegSticker = styled.img`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  filter: drop-shadow(0 0.5rem 0.5rem rgba(${colorBlackRGB}, 0.5));
`;

export const DescriptionContainer = styled.div`
  padding: 0.5rem 1.2rem 1rem;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-weight: 700;
  line-height: 1.2;
`;

export const Price = styled.p`
  font-weight: 700;
`;

export const DescriptionBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 0.7rem 0;
`;

export const Rating = styled.p`
  background-color: ${({ rating }) => getBackgorundColor(rating)};
  justify-self: flex-start;
  display: flex;
  align-items: center;
  padding: 2px 5px;
  border-radius: 2px;
`;

export const RatingText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colorWhite};
  padding-left: 3px;
`;

export const Serving = styled.p`
  justify-self: center;
  display: flex;
  align-items: center;
`;

export const ServingText = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colorGrayDark2};
  padding-left: 3px;
`;

export const MenuItemLink = styled(Link)`
  justify-self: end;
  font-size: 1.4rem;
  color: ${colorPrimary};
`;
