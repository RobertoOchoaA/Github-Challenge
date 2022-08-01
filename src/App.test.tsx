import { render } from "@testing-library/react";
import App from "./App";

test("should render child components", () => {
  const { getByTestId } = render(<App />);

  const appContainer = getByTestId("app-container");
  const searchPage = getByTestId("search-page");
  expect(appContainer).toContainElement(searchPage);
});
