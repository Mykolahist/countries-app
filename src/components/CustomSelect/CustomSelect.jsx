import Select from "react-select";

import styled from "styled-components";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--text-color)",
      borderRadius: "var(--b-radius)",
      padding: "4px",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--text-color)",
      backgroundColor: state.isSelected
        ? "var(--bg-color)"
        : "var(--colors-ui-base)",
    })
  }
})`
  width: 200px;
  border-radius: var(--b-radius);
  font-family: var(--font);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 4px;
  }
  & * {
    color: var(--text-color) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
