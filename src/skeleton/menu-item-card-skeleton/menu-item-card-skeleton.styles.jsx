import styled from 'styled-components';
import {
  colorWhite,
  colorBlackRGB,
} from '../../utils/style-variables/style-variables.utils';

import { skeletonShimmerAnimation } from '../../utils/skeleton-shimmer-animation/skeleton-shimmer-animation.styles';

export const SkeletonContainer = styled.div`
  background-color: ${colorWhite};
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(${colorBlackRGB}, 0.5);
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 17rem;

  ${skeletonShimmerAnimation}
`;

export const DescriptionContainer = styled.div`
  padding: 1rem 1.2rem;
`;

export const HeaderBox = styled.div`
  width: 75%;
  height: 2.2rem;

  ${skeletonShimmerAnimation}
`;

export const DescriptionBodyBox = styled.div`
  height: 2rem;
  width: 100%;
  margin: 0.7rem 0;

  ${skeletonShimmerAnimation}
`;

export const ButtonBox = styled.div`
  height: 4rem;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.3);

  ${skeletonShimmerAnimation}
`;
