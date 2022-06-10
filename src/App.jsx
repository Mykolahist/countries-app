import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Controls } from "./components/Controls/Controls";

export const App = () => (
  <>
    <Header />
    <Main>
      <Controls />
    </Main>
  </>
);
