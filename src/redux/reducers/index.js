import { combineReducers } from "redux";
import robotsReducers from "./robotsReducers";

export default combineReducers({
  robots: robotsReducers,
});
