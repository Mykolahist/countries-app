import {
  Wrapper,
  Picture,
  CardBody,
  CardTitle,
  CardList,
  CardItem
} from "./Card.styled";

export const Card = ({ img, name, info = [], onClick }) => {  
  return (
    <Wrapper onClick={onClick}>
      <Picture />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(e => (
            <CardItem key={e.title}>
              <b>{e.title}:</b> {e.description}
            </CardItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};