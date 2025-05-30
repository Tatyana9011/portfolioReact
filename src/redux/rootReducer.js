import { combineReducers } from "redux";
import menuSlice from "./feature/menuSlice";
import homeSlise from './feature/homeSlise';

// import other reducers here
const rootReducer = combineReducers({
  menu: menuSlice,
  home: homeSlise,
});

export default rootReducer;