import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 32px 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    padding: 40px 0;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;