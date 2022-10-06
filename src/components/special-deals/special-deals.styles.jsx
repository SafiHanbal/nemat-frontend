import styled from 'styled-components';

export const SpecialDealsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;

  width: 108rem;
  margin: 2rem auto;
`;

export const Heading = styled.h2`
  margin: 3rem 0;
  text-align: center;
  font-size: 3.2rem;
`;
