import { combineReducers } from "redux";
import tutorReducer from "./tutorReducer";

const rootReducer = combineReducers({
  tutors: tutorReducer,
});

export default rootReducer;
