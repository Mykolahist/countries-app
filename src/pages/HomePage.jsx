import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Controls } from "../components/Controls/Controls";
import { CountryList } from "../components/CountryList/CountryList";
import { Card } from "../components/Card/Card";
import { ALL_COUNTRIES } from "../configs";

export const HomePage = ({ setCountries, countries }) => {
  const [filteredCountries, setFiltredCountries] = useState(countries);

  const navigate = useNavigate();

  const handleSearch = () => {
    
  }

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <CountryList>
        {countries.map(c => {
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
              onClick={() => navigate(`/country/${c.name}`)}            
              {...countryInfo}
            />
          )
        })}
      </CountryList>
    </>
  );
};