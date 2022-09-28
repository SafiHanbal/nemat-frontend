import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorGrayDark3,
  colorPrimary,
  colorPrimaryDark,
  colorSecondary,
} from '../../utils/style-variables/style-variables.utils';

export const LoginHeading = styled.h2`
  font-size: 2.4rem;
`;

export const LoginFormContainer = styled.div`
  width: 50%;
  min-height: 40rem;
  padding: 2rem 6rem;
`;

export const Form = styled.form`
  padding: 2.5rem 0 3.5rem;
  border-bottom: 1px solid ${colorGrayDark3};
`;

export const SignUpLinkParagraph = styled.p`
  margin-top: 2rem;
`;

export const ForgotPasswordLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${colorSecondary};
  padding-top: 1rem;
`;

export const SingUpLink = styled(Link)`
  text-decoration: none;
  color: ${colorPrimary};
`;

export const ErrorMsg = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
`;
