import axios from "axios";
import { useState, useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Controls } from "./components/Controls/Controls";
import { CountryList } from "./components/CountryList/CountryList";
import { Card } from "./components/Card/Card";
import { ALL_COUNTRIES } from "./configs";

export const App = () => {
  const [countries, setCountries] = useState([]);

  console.log(countries);
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <CountryList>
          {countries.map(c => {
            const countryInfo = {};
          })}
        </CountryList>
      </Main>
    </>
  );
};
