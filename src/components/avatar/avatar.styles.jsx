import styled from 'styled-components';

import { colorBlackRGB } from '../../utils/style-variables/style-variables.utils';

export const AvatarContainer = styled.div`
  height: ${({ small }) => (small ? '4.5rem' : '5.5rem')};
  width: ${({ small }) => (small ? '4.5rem' : '5.5rem')};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 3px rgba(${colorBlackRGB}, 0.7);
`;

export const AvatarImg = styled.img`
  height: 100%;
  width: 100%;
`;
