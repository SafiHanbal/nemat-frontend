import styled from 'styled-components';

import { colorWhite } from '../../utils/style-variables/style-variables.utils';

import { ReactComponent as CartSvg } from '../../assets/shopping-cart.svg';

export const CartIconContainer = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

export const CartIcon = styled(CartSvg)`
  color: ${colorWhite};
  stroke-width: 1.5px;
  height: 3rem;
  width: 3rem;
`;

export const CartCount = styled.span`
  position: absolute;
  left: 60%;
  top: 43%;

  transform: translate(-50%, -50%);

  font-size: 1rem;
  text-align: center;
  color: ${colorWhite};
`;
