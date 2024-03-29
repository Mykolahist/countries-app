import { Wrapper } from "./Main.styled";
import { Container } from "../Container/Container";

export const Main = ({children}) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};