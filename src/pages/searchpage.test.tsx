import { render } from "@testing-library/react";
import SearchPage from "./searchpage";

test("should render child components", () => {
  const { getByTestId } = render(<SearchPage />);

  const searchPage = getByTestId("search-page");
  const formContainer = getByTestId("form-container");
  const resultsContainer = getByTestId("results-container");
  expect(searchPage).toContainElement(formContainer);
  expect(searchPage).toContainElement(resultsContainer);
});
