import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import { HomePage } from "./pages/HomePage";
import { More } from "./pages/More";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={
            <HomePage
              countries={countries}
              setCountries={setCountries}
            />} />
          <Route path="/country/:name" element={<More />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};
