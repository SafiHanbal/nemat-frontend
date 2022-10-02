import styled from 'styled-components';

import {
  colorSecondary,
  colorGrayLight3,
  colorPrimaryDark,
} from '../../utils/style-variables/style-variables.utils';

import { ReactComponent as StarImg } from '../../assets/star.svg';

export const ReviewFormContainer = styled.div`
  width: 80rem;
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-column-gap: 1rem;
`;

export const DescriptionContainer = styled.div``;

export const StarContainer = styled.div``;

export const Star = styled(StarImg)`
  height: 3.5rem;
  width: 3.5rem;
  stroke: none;
  fill: ${({ active }) => (active ? colorSecondary : colorGrayLight3)};
  cursor: pointer;
`;

export const Form = styled.form``;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  border-bottom: 2px solid ${colorSecondary};
  background-color: ${colorGrayLight3};
`;

export const Error = styled.p`
  color: ${colorPrimaryDark};
`;
