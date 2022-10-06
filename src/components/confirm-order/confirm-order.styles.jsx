import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  colorPrimary,
  colorWhite,
} from '../../utils/style-variables/style-variables.utils';

export const ConfirmOrderContainer = styled.div`
  width: 80rem;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  margin: 2rem 0;
  border: 2px solid ${colorPrimary};
  width: 80rem;
  padding: 2rem 2.5rem 1rem;
  border-radius: 1rem;
`;

export const RadioContainer = styled.div`
  margin-bottom: 1rem;
`;

export const RadioButton = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${colorPrimary};
  cursor: pointer;
  transition: all 0.01s;

  &:hover {
    background-color: ${colorWhite};
  }

  &::after {
    content: '';
    display: inline-block;
    min-height: 12px;
    width: 12px;
    background-color: ${colorPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: none;
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${RadioButton}::after {
    display: block;
  }
`;

export const Label = styled.label`
  position: relative;
  min-height: 2.5rem;
  padding-left: 2.5rem;
  line-height: 1;
  cursor: pointer;

  &:hover ${RadioButton} {
    background-color: ${colorWhite};
  }
`;

export const Total = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const AuthLink = styled(Link)`
  text-decoration: none;
`;
