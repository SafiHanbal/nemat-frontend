import styled from 'styled-components';
import {
  colorSecondary,
  colorGrayLight3,
  colorGrayDark1,
  colorGrayDark2,
} from '../../utils/style-variables/style-variables.utils';

import { ReactComponent as StarImg } from '../../assets/star.svg';

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: flex-start;
  margin-top: 3rem;
  width: 80rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colorSecondary};
`;

export const ReviewDescriptionContainer = styled.div`
  padding-left: 1.5rem;
`;

export const Name = styled.h3`
  font-size: 1.8rem;
  color: ${colorGrayDark1};
`;

export const StarContainer = styled.div``;

export const Star = styled(StarImg)`
  stroke: none;
  fill: ${({ active }) => (active ? colorSecondary : colorGrayLight3)};
  cursor: pointer;
`;

export const ReviewText = styled.p`
  color: ${colorGrayDark2};
`;
