import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  colorBlackRGB,
  colorSecondary,
  colorWhite,
} from '../../utils/style-variables/style-variables.utils';

import { ReactComponent as NematLogo } from '../../assets/nemat-logo.svg';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  background-color: ${colorSecondary};
  padding: 1rem 8rem;
  box-shadow: 0 5px 5px rgba(${colorBlackRGB}, 0.3);
  position: sticky;
  position: -webkit-sticky;
`;

export const LogoContainer = styled(Link)``;

export const Logo = styled(NematLogo)`
  height: auto;
  filter: drop-shadow(0 2px 2px rgba(${colorBlackRGB}, 0.5));
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colorWhite};
  margin-left: 4rem;
`;
