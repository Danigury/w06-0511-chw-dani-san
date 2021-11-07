import axios from "axios";
import { loadRobots } from "../actions/actionCreator";

let apiUrl = process.env.REACT_APP_URL_API;

const loadRobotsThunk = () => async (dispatch) => {
  const { data } = await axios.get(apiUrl);

  dispatch(loadRobots(data));
};

export default loadRobotsThunk;
