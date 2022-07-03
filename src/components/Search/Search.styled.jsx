import styled from "styled-components";

export const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 16px 16px;
  display: flex;
  align-items: center;
  border-radius: var(--b-radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 767px) {
    padding: 16px 24px;
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country..."
})`
  margin-left: 8px;
  border: none;
  outline: none;
  color: var(--text-color);
  background-color: var(--colors-ui-base);

  @media (min-width: 767px) {
    margin-left: 16px;
  }
`;