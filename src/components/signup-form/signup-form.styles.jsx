import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorGrayDark3,
  colorPrimary,
  colorPrimaryDark,
} from '../../utils/style-variables/style-variables.utils';

export const SignUpFormContainer = styled.div`
  width: 50%;
  min-height: 40rem;
  padding: 0 6rem;
`;

export const SignupHeading = styled.h2`
  font-size: 2rem;
  line-height: 1;
`;

export const Form = styled.form`
  border-bottom: 1px solid ${colorGrayDark3};
  padding: 2rem 0 1rem;
`;

export const AddressInputsContaier = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.5rem;
`;

export const HouseInputContainer = styled.div`
  grid-column: span 2;
`;

export const AreaInputContainer = styled.div`
  grid-column: span 4;
`;

export const CityInputContainer = styled.div`
  grid-column: span 3;
`;

export const PinCodeInputContainer = styled.div`
  grid-column: span 3;
`;

export const LoginLinkParagraph = styled.p`
  margin-top: 1rem;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${colorPrimary};
`;

export const ErrorMsg = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
`;
