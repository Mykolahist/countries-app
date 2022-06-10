import { Wrapper } from "./Main.styled";
import { Container } from "../Container";

export const Main = ({children}) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};