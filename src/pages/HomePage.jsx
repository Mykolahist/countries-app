import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Controls } from "../components/Controls/Controls";
import { CountryList } from "../components/CountryList/CountryList";
import { Card } from "../components/Card/Card";
import { ALL_COUNTRIES } from "../configs";

export const HomePage = ({ setCountries, countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const { push } = useHistory();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(c => c.region.includes(region));
    };

    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    };

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <CountryList>
        {filteredCountries.map(c => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString()
              },
              {
                title: "Region",
                description: c.region
              },
              {
                title: "Capital",
                description: c.capital
              }
            ]
          };

          return (
            <Card
              key={c.name}
              onClick={() => push(`/country/${c.name}`)}            
              {...countryInfo}
            />
          )
        })}
      </CountryList>
    </>
  );
};