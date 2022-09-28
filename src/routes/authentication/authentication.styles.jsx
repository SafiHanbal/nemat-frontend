import styled from 'styled-components';

import {
  colorPrimaryRGB,
  colorPrimaryLightRGB,
  colorBlackRGB,
} from '../../utils/style-variables/style-variables.utils';

import AuthenticationImage from '../../assets/authentication-image.jpg';

export const AuthenticationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin: 6rem 16rem;
  min-height: 40rem;
`;

export const AuthenticationPageImage = styled.div`
  min-height: inherit;
  min-width: 50rem;
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.3);

  background-image: linear-gradient(
      to bottom right,
      rgba(${colorPrimaryRGB}, 0.7),
      rgba(${colorPrimaryLightRGB}, 0.7)
    ),
    url(${AuthenticationImage});
`;
