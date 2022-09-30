import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorPrimaryDark,
  colorGrayDark3,
  colorBlackRGB,
} from '../../utils/style-variables/style-variables.utils';

export const LogoutContainer = styled.div`
  margin-left: 27rem;
  padding: 3rem 5rem;
  margin-top: 30vh;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 1.8rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 34rem;
  margin: 1rem auto;
`;

export const CancelLogout = styled(Link)`
  text-decoration: none;
  width: 16rem;
  text-align: center;
  font-weight: 700;
  color: ${colorGrayDark3};
  display: block;
  padding: 1rem 0;
  margin-right: 2rem;
  border: 1px solid ${colorGrayDark3};
  line-height: 1;
  height: 4rem;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.3);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 1px rgba(${colorBlackRGB}, 0.3);
  }
`;

export const Error = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
  text-align: center;
`;
