import styled from 'styled-components';
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
