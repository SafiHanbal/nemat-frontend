import styled from 'styled-components';

import {
  colorPrimaryRGB,
  colorPrimaryLightRGB,
  colorBlackRGB,
  colorWhite,
  colorGrayLight1,
  fontDisplay,
  colorGrayLight2,
} from '../../utils/style-variables/style-variables.utils';

export const MenuItemContanier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 55rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      to bottom right,
      rgba(${colorPrimaryRGB}, 0.7),
      rgba(${colorPrimaryLightRGB}, 0.7)
    ),
    url(${({ image }) => image});
`;

export const Name = styled.h2`
  font-family: ${fontDisplay};
  text-align: center;
  color: ${colorWhite};
  letter-spacing: 1px;
  font-size: 6rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.5);
  line-height: 1;
`;

export const Summary = styled.p`
  color: ${colorGrayLight2};
  font-size: 1.8rem;
  text-align: center;
  padding: 0 16rem;
  text-shadow: 0 1px 1px rgba(${colorBlackRGB}, 0.5);
  margin-bottom: 4rem;
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  width: 50rem;
`;

export const DescriptionEl = styled.p`
  color: ${colorGrayLight1};
  text-align: center;
  font-size: 1.8rem;
  text-shadow: 0 1px 1px rgba(${colorBlackRGB}, 0.5);
`;

export const DescriptionKey = styled.span`
  font-weight: 700;
  margin-right: 1rem;
`;

export const DescriptionValue = styled.span``;

export const ButtonContainer = styled.div`
  width: 16rem;
  margin: 0 auto;
  margin-top: 2rem;
`;
