import { IoSearch } from "react-icons/io5";

import { InputContainer, Input } from "./Search.styled";

export const Search = ({ search, setSearch }) => {
  const onHandleChange = (e) => setSearch(e.target.value);

  return (
    <InputContainer>
      <IoSearch />      
      <Input
        onChange={onHandleChange}
        value={search}
      />
    </InputContainer>
  );
};
