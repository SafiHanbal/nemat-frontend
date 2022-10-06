import styled from 'styled-components';
import {
  colorGrayDark1,
  colorGrayDark2,
  colorGrayLight3,
} from '../../utils/style-variables/style-variables.utils';

export const MenuItemContainer = styled.div`
  width: 80rem;
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${colorGrayLight3};

  position: relative;
`;

export const Image = styled.img`
  background-size: cover;
  height: 10rem;
  width: 15rem;
`;

export const DescriptionContainer = styled.div`
  padding: 0 3rem;
`;

export const Name = styled.h3`
  font-size: 1.7rem;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
`;

export const Property = styled.span`
  font-weight: 700;
  color: ${colorGrayDark1};
  display: inline-block;
  margin-right: 1rem;
`;

export const Value = styled.span`
  color: ${colorGrayDark2};
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;

  border: 1px solid ${colorGrayDark1};
  border-radius: 2px;
  color: ${colorGrayDark1};
  font-size: 1.4rem;
  font-family: inherit;
  font-weight: 700;
  padding: 0.3rem 0.5rem;
`;
