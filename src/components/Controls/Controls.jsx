import { useState, useEffect } from "react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Search } from "../Search/Search";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },  
  { value: "", label: "" },  
  { value: "", label: "" },  
  { value: "", label: "" },
  { value: "", label: "" }
]

export const Controls = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <CustomSelect />
    </div>
  );
};
