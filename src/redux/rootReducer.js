import { combineReducers } from "redux";
import menuSlice from "./feature/menuSlice";
import homeSlise from './feature/homeSlise';
import curuselSlise from "./feature/curuselSlise";

// import other reducers here
const rootReducer = combineReducers({
  menu: menuSlice,
  home: homeSlise,
  curusel:curuselSlise,
});

export default rootReducer;