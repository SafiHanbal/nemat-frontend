import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorPrimary,
  colorPrimaryLight,
  colorWhite,
} from '../../utils/style-variables/style-variables.utils';

export const CategoriesNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0.6rem 8rem;
  border-top: 1px solid ${colorWhite};
  background-image: linear-gradient(
    to bottom right,
    ${colorPrimary},
    ${colorPrimaryLight}
  );

  position: sticky;
  top: 6.7rem;
  z-index: 10;
`;

export const CategoryLink = styled(Link)`
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  color: ${colorWhite};
`;
