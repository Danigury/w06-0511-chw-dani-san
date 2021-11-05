import actionTypes from "../actions/actionTypes";

const robotsReducers = (robots = [], action) => {
  let newRobots;
  switch (action.type) {
    case actionTypes.LOADROBOTS:
      newRobots = [...action.robots];
      break;
    default:
      newRobots = robots;
  }
  return newRobots;
};

export default robotsReducers;
