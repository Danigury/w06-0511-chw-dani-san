import { combineReducers } from "redux";
import robotsReducers from "./robotsReducer";

export default combineReducers({
  robots: robotsReducers,
});
