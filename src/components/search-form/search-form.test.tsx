import { fireEvent, render } from "@testing-library/react";
import SearchForm from "./search-form";

test("should trigger on search method when clicked", () => {
  const mockedOnSearch = jest.fn();
  const { getByTestId } = render(<SearchForm onSearch={mockedOnSearch} />);

  const searchButton = getByTestId("search-button");
  fireEvent.click(searchButton);
  expect(mockedOnSearch).toHaveBeenCalledTimes(1);
});
