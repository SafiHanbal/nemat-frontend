import styled from 'styled-components';

import { colorPrimaryDark } from '../../utils/style-variables/style-variables.utils';

export const ForgotPasswordFormContainer = styled.div`
  padding: 2rem 6rem;
  width: 50%;
`;

export const ForgotPasswordHeading = styled.h2`
  font-size: 2.5rem;
  padding-bottom: 1rem;
`;

export const ForgotPasswordDescription = styled.p`
  padding-bottom: 3rem;
`;

export const Form = styled.form`
  padding: 0 0 3.5rem;
`;

export const ErrorMsg = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
`;
