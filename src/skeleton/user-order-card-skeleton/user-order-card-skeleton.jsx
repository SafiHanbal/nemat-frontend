import styled from 'styled-components';

import {
  colorBlackRGB,
  colorGrayLight3,
  colorGrayDark3,
} from '../../utils/style-variables/style-variables.utils';

import { skeletonShimmerAnimation } from '../../utils/skeleton-shimmer-animation/skeleton-shimmer-animation.styles';

export const SkeletonContainer = styled.div`
  box-shadow: 0 3px 5px rgba(${colorBlackRGB}, 0.5);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-bottom: 4px solid ${colorGrayDark3};
  border-left: 1px solid ${colorGrayDark3};
  border-right: 1px solid ${colorGrayDark3};
`;

export const CardHeader = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2rem 0.5rem;
  border-bottom: 1px solid ${colorGrayLight3};
`;

export const DateBox = styled.div`
  height: 1.6rem;
  width: 14rem;

  ${skeletonShimmerAnimation}
`;

export const PriceBox = styled.div`
  height: 2rem;
  width: 10rem;

  ${skeletonShimmerAnimation}
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem 2rem 0.5rem;
`;

export const OrderedItem = styled.div`
  display: flex;
`;

export const ImageBox = styled.div`
  width: 9.6rem;
  height: 6.8rem;

  ${skeletonShimmerAnimation}
`;

export const Description = styled.div`
  padding-left: 1rem;
`;

export const TextBox = styled.div`
  height: 1.6rem;
  width: 15rem;
  margin-bottom: 5px;

  ${skeletonShimmerAnimation}
`;

export const TextBoxShort = styled(TextBox)`
  width: 10rem;
`;
