import styled from 'styled-components';
import {
  colorPrimaryRGB,
  colorPrimaryLightRGB,
  fontDisplay,
  colorWhite,
  colorBlackRGB,
  colorGrayLight1,
} from '../../utils/style-variables/style-variables.utils';

import HeroImg from '../../assets/hero-img.jpg';

export const HeaderComp = styled.header`
  display: flex;
  align-items: center;

  min-height: 55rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      to bottom right,
      rgba(${colorPrimaryRGB}, 0.8),
      rgba(${colorPrimaryLightRGB}, 0.8)
    ),
    url(${HeroImg});
`;

export const Heading1 = styled.h1`
  font-family: ${fontDisplay};
  text-align: center;
  color: ${colorWhite};
  letter-spacing: 1px;
`;

export const Greetings = styled.span`
  display: block;
  font-size: 3.5rem;
  line-height: 1.1;
  padding-bottom: 1rem;
  text-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.5);
`;

export const Name = styled.span`
  display: block;
  font-size: 7rem;
  line-height: 1.1;
  padding-bottom: 2rem;
  text-shadow: 0 5px 5px rgba(${colorBlackRGB}, 0.5);
`;

export const Description = styled.p`
  color: ${colorGrayLight1};
  font-size: 1.7rem;
  text-align: center;
  padding: 0 16rem;
  text-shadow: 0 1px 1px rgba(${colorBlackRGB}, 0.5);
  padding-bottom: 2rem;
`;
