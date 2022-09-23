import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorGrayDark3,
  colorPrimary,
} from '../../utils/style-variables/style-variables.utils';

export const SignUpFormContainer = styled.div`
  width: 50%;
  min-height: 40rem;
  padding: 2rem 6rem;
`;

export const SignupHeading = styled.h2`
  font-size: 2rem;
`;

export const Form = styled.form`
  border-bottom: 1px solid ${colorGrayDark3};
`;

export const LoginLinkParagraph = styled.p``;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${colorPrimary};
`;
