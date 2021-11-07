import renderWithProviders from "../../../utils/testUtils";
import FormUpdate from "./FormUpdate";
import { screen } from "@testing-library/react";

describe("Given a FormUpdate component", () => {
  describe("When the form it's rendered", () => {
    test("Then it should render the form with a button update", () => {
      renderWithProviders(<FormUpdate />);

      const elementForm = screen.getByRole("button", { name: /update/i });
      expect(elementForm).toBeInTheDocument();
    });
  });
});
