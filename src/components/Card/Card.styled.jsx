import styled from "styled-components";

export const Wrapper = styled.article`
  border-radius: var(--b-radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

export const CardBody = styled.div`
  padding: 16px 24px 32px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--font-middle);
  font-weight: var(--font-bold);
`;

export const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px 0 0;
`;

export const CardItem = styled.li`
  font-size: var(--font-small);
  line-height: 1.5;
  font-weight: var(--font-light);
  
  & > b {
    font-weight: var(--font-bold);
  }
`;