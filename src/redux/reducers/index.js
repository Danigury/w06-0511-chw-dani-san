import { combineReducers } from "redux";
import robotsReducers from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotsReducers,
});

export default rootReducer;
