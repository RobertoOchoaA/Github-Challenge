import {
  ResultsContainer,
  Container,
  TitleLoading,
  TitleEmpty,
  TitleError,
} from "./search-results.styles";
import { Result } from "../../models/search.model";
import Card from "../card/card";

const SearchResults = (props: {
  results: Result[] | null;
  loading: boolean;
  errorMessage: string;
}) => {
  const { results, loading, errorMessage } = props;

  if (loading) {
    return (
      <Container>
        <TitleLoading>Loading...</TitleLoading>
      </Container>
    );
  }

  if (errorMessage) {
    return (
      <Container>
        <TitleError>{errorMessage}</TitleError>
      </Container>
    );
  }

  if (results !== null && !results.length) {
    return (
      <Container>
        <TitleEmpty>No results found!</TitleEmpty>
      </Container>
    );
  }

  return (
    <ResultsContainer data-testid="results-container">
      {results?.map((result) => (
        <Card key={result.id} card={result} />
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;
