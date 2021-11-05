import axios from "axios";
import { loadRobots } from "../actions/actionCreator";

let apiUrl;

const loadRobotsThunk = () => async (dispatch) => {
  const { data } = await axios.get(apiUrl);

  dispatch(loadRobots(data));
};

export default loadRobotsThunk;
