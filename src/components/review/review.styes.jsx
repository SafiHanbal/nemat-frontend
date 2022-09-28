import styled from 'styled-components';
import {
  colorBlackRGB,
  colorWhite,
} from '../../utils/style-variables/style-variables.utils';

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  align-items: flex-start;
  margin-top: 3rem;
`;

export const ReviewDescriptionContainer = styled.div`
  padding-left: 1.5rem;
`;

export const Name = styled.h3``;

export const Date = styled.p``;

export const ReviewText = styled.p``;
