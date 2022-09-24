import styled from 'styled-components';

import {
  colorSecondary,
  colorGrayLight2,
} from '../../utils/style-variables/style-variables.utils';

const shrinkLabel = `
  font-size: 1.3rem;
  left: 0;
  top: 0;
  transform: translateY(-100%);
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.15s;
  cursor: text;

  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Input = styled.input`
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  border-bottom: 2px solid ${colorSecondary};
  background-color: ${colorGrayLight2};

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
