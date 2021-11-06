// import { loadRobots } from "../actions/actionCreator";
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given robotsReducers ", () => {
  describe("When it recieves an empty robots list and an action to load one", () => {
    test("Then it should return a list with the robot recieved ", () => {
      const initialStateRobot = [];
      const robots = [
        {
          _id: "1",
          name: "Wall-e",
          url: "http://macmagazine.com.br/blog/wp-content/uploads/2008/06/28-walle021.jpg",
          features: {
            speed: 2,
            stamina: 10,
            creationDate: new Date(),
          },
        },
      ];

      const loadRobots = {
        type: actionTypes.LOADROBOTS,
        robots,
      };

      const newRobots = robotsReducer(initialStateRobot, loadRobots);

      expect(newRobots).toEqual(robots);
    });
  });
});
