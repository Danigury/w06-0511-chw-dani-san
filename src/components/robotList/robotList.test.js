import renderWithProviders from "../../utils/testUtils";
import RobotList from "./robotList";

describe("Given a component RobotList component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a list of robots", () => {
      renderWithProviders(<RobotList />);
    });
  });
});
