import { keyframes, css } from 'styled-components';

import {
  colorGrayLight2,
  colorGrayLight3,
} from '../style-variables/style-variables.utils';

export const shimmer = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

export const skeletonShimmerAnimation = css`
  background: linear-gradient(
    120deg,
    ${colorGrayLight3} 30%,
    ${colorGrayLight2} 38%,
    ${colorGrayLight2} 40%,
    ${colorGrayLight3} 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${shimmer} 2s infinite;
`;
