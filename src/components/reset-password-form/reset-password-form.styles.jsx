import styled from 'styled-components';

import { colorPrimaryDark } from '../../utils/style-variables/style-variables.utils';

export const ResetPasswordFormContainer = styled.div`
  padding: 2rem 6rem;
  width: 50%;
`;

export const ResetPasswordFormHeading = styled.h2`
  font-size: 2.5rem;
`;

export const Form = styled.form`
  padding: 2.5rem 0;
`;

export const ErrorMsg = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
`;
