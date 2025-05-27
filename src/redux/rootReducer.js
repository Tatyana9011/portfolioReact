import { combineReducers } from "redux";
import menuSlice from "./feature/menuSlice";
// import other reducers here
const rootReducer = combineReducers({
  menu: menuSlice
});

export default rootReducer;