import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorPrimary,
  colorPrimaryLight,
  colorBlackRGB,
  colorWhite,
  colorSecondary,
} from '../../utils/style-variables/style-variables.utils';

export const SideNavContainer = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${colorPrimary},
    ${colorPrimaryLight}
  );
  min-height: 100vh;
  box-shadow: 5px 0 5px rgba(${colorBlackRGB}, 0.3);
  min-width: 27rem;
  position: fixed;
  top: 6.7rem;
`;

export const Heading = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colorWhite};
  padding: 0 0 0.5rem;
  letter-spacing: 1px;
  text-align: center;
  border-bottom: 1px solid ${colorWhite};
`;

export const UserSettingsContainer = styled.div`
  margin-top: 1rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colorWhite};
  display: block;
  text-align: center;
  padding: 0.7rem;
  font-size: 1.8rem;
  border-bottom: 1px solid ${colorWhite};
  background-color: ${({ active }) =>
    active ? colorSecondary : 'transparent'};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) =>
      active ? colorSecondary : `rgba(${colorBlackRGB}, .3)`};
  }
`;

export const AdminSettingsContainer = styled.div`
  margin-top: 7rem;
`;
