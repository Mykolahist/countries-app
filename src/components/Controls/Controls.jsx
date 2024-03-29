import { useState, useEffect } from "react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Search } from "../Search/Search";
import { Wrapper } from "./Controls.styled";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" }
];

export const Controls = ({ onSearch }) => {  
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);

    // eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};