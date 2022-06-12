import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>        
          <Route path="/country/:name" component={More} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
};
