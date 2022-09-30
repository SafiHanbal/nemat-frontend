import styled from 'styled-components';

import { colorPrimaryDark } from '../../utils/style-variables/style-variables.utils';

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;

  margin-bottom: 3rem;
`;

export const Error = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
  text-align: center;
`;
