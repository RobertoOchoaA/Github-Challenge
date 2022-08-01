import React, { useState, useRef, FormEvent } from "react";
import {
  InputForm,
  ControlContainer,
  Text,
  Title,
  Form,
  ActionsContainer,
  ControlsContainer,
  Button,
  ActionContainer,
  RadioButton,
  Label,
} from "./search-form.styles";
import { SearchTypeEnum } from "../../constants/search";
import type { SearchType } from "../../models/search.model";

const SearchForm = (props: {
  onSearch: (searchText?: string, searchType?: SearchType) => void;
}) => {
  const [searchType, setSearchType] = useState<SearchType>(
    SearchTypeEnum.USERS
  );
  const searchTextInputRef = useRef<HTMLInputElement | null>(null);
  const searchHandler = (event: FormEvent) => {
    event.preventDefault();
    const searchText = searchTextInputRef.current?.value;

    props.onSearch(searchText, searchType);
  };

  const toggleSearchTypeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchType(event.target.value as SearchType);
  };

  return (
    <Form onSubmit={searchHandler} data-testid="form-container">
      <Title>Search Github for users/organizations</Title>
      <ControlsContainer>
        <ControlContainer>
          <Text>Search by</Text>
          <RadioButton
            type="radio"
            value={SearchTypeEnum.USERS}
            checked={searchType === SearchTypeEnum.USERS}
            onChange={toggleSearchTypeHandler}
          />
          <Label>Users</Label>
          <RadioButton
            type="radio"
            value={SearchTypeEnum.ORGANIZATIONS}
            checked={searchType === SearchTypeEnum.ORGANIZATIONS}
            onChange={toggleSearchTypeHandler}
          />
          <Label>Organizations</Label>
        </ControlContainer>

        <ControlContainer>
          <Text>Search Text:</Text>
          <InputForm id="searchText" ref={searchTextInputRef} />
        </ControlContainer>
      </ControlsContainer>
      <ActionsContainer>
        <ActionContainer>
          <Button data-testid="search-button">Search</Button>
        </ActionContainer>
      </ActionsContainer>
    </Form>
  );
};

export default SearchForm;
