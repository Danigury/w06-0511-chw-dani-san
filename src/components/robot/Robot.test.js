import renderWithProviders from "../../utils/testUtils";
import Robot from "./Robot";

describe("Given a component Robot", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a robot", () => {
      renderWithProviders(<Robot />);
    });
  });
});
