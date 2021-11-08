// import axios from "axios";
import { loadRobots } from "../actions/actionCreator";

let apiUrl = process.env.REACT_APP_URL_API;

const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(apiUrl);
    const robots = await response.json();

    dispatch(loadRobots(robots));
  };
};

export default loadRobotsThunk;
