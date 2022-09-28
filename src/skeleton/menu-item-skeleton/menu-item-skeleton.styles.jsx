import styled from 'styled-components';
import { colorBlackRGB } from '../../utils/style-variables/style-variables.utils';
import { skeletonShimmerAnimation } from '../../utils/skeleton-shimmer-animation/skeleton-shimmer-animation.styles';

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 55rem;
`;

export const NameBox = styled.div`
  height: 6rem;
  width: 40rem;
  margin: 0 auto 1.5rem;

  ${skeletonShimmerAnimation}
`;

export const SummaryBox = styled.div`
  height: 2.5rem;
  width: 80rem;
  margin: 0 auto 4rem;

  ${skeletonShimmerAnimation}
`;

export const PropertyBox = styled.div`
  height: 2.5rem;
  width: 45rem;
  margin: 0 auto 1rem;

  ${skeletonShimmerAnimation}
`;

export const ButtonBox = styled.div`
  height: 4rem;
  width: 16rem;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(${colorBlackRGB}, 0.3);
  margin: 2rem auto 0;

  ${skeletonShimmerAnimation}
`;
