import styled from "styled-components";

export const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    padding: 1rem 1.5rem;
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country..."
})`
  margin-left: 0.5rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);

  @media (min-width: 767px) {
    margin-left: 1rem;
  }
`;