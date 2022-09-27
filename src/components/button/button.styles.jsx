import styled from 'styled-components';

import {
  colorBlackRGB,
  colorPrimary,
  colorPrimaryLight,
  colorWhite,
} from '../../utils/style-variables/style-variables.utils';

export const ButtonEl = styled.button`
  display: block;
  height: 4rem;
  width: ${({ buttonWidth }) => (buttonWidth === '100%' ? '100%' : '16rem')};
  text-align: center;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  color: ${colorWhite};
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.3);
  background-image: linear-gradient(
    to bottom right,
    ${colorPrimary},
    ${colorPrimaryLight}
  );
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 1px rgba(${colorBlackRGB}, 0.3);
  }
`;
