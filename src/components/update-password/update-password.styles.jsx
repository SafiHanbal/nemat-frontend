import styled from 'styled-components';

import { colorPrimaryDark } from '../../utils/style-variables/style-variables.utils';

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 50%;
`;

export const Error = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
  text-align: center;
`;
