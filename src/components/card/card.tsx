import {
  Body,
  Button,
  CardContainer,
  Description,
  Image,
  Title,
} from "./card.styles";
import { Result } from "../../models/search.model";

const Card = (props: { card: Result }) => {
  const { avatar_url, login, type, html_url } = props.card;

  return (
    <CardContainer>
      <Image src={avatar_url} alt={login} />
      <Body>
        <Title>{login}</Title>
        <Description>{`Type: ${type}`}</Description>
        <Button href={html_url} target="_blank">
          Go to Page
        </Button>
      </Body>
    </CardContainer>
  );
};

export default Card;
