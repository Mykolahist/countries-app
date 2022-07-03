import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 32px;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 80px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--font-normal);
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 64px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--font-bold);
  }
`;

export const Meta = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--font-bold);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 0 16px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;