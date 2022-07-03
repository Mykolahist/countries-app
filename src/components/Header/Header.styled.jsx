import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

export const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--text-color);
  font-size: var(--font-small);
  text-decoration: none;
  font-weight: var(--font-bold);
`;

export const ModeSwitcher = styled.div`
  color: var(--text-color);
  font-size: var(--font-small);
  cursor: pointer;
  text-transform: capitalize;
`;