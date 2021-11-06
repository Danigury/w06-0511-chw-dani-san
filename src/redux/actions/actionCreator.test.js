import { loadRobots } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a loadRobots actionCreator", () => {
  describe("When it recieves a robots list", () => {
    test("Then it should return a load action with the robots list recieved", () => {
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

      const actionType = {
        type: actionTypes.LOADROBOTS,
        robots,
      };

      const actionResult = loadRobots(robots);

      expect(actionResult).toEqual(actionType);
    });
  });
});
