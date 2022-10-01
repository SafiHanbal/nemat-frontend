import styled from 'styled-components';

import { colorPrimaryDark } from '../../utils/style-variables/style-variables.utils';

export const Heading = styled.h2`
  font-size: 2rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;

  margin: 2rem 0 3rem;
`;

export const Error = styled.p`
  color: ${colorPrimaryDark};
  font-size: 1.4rem;
`;

export const FileInpuContainer = styled.div`
  margin-bottom: 2rem;
`;

export const FileInputLabel = styled.label`
  display: block;
  font-size: 1.3rem;
`;

export const FileInput = styled.input``;
