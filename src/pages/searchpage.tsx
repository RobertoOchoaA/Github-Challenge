import { useState } from "react";
import SearchForm from "../components/search-form/search-form";
import SearchResults from "../components/search-results/search-results";
import { SearchTypeEnum } from "../constants/search";
import type { SearchType } from "../models/search.model";

const SearchPage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const searchHandler = async (
    searchText: string = "",
    searchType: SearchType = SearchTypeEnum.USERS
  ) => {
    if (!searchText || searchText.trim() === "") {
      setErrorMessage("Invalid input!");
      return;
    }

    const newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      `/search/${searchText}`;
    window.history.pushState({ path: newUrl }, "", newUrl);

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${searchText}${
          searchType === SearchTypeEnum.ORGANIZATIONS ? "+type:org" : ""
        }`
      );
      const data = await res.json();

      if (!res.ok) {
        if (data instanceof Error) setErrorMessage(data.message);
        else setErrorMessage("Api failed!");
        setLoading(false);
        return;
      }

      setResults(data.items);
      setErrorMessage("");
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message);
      else setErrorMessage("Api failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="search-page">
      <SearchForm onSearch={searchHandler} />
      <SearchResults
        results={results}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default SearchPage;
