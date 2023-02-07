import { combineReducers } from "redux";

const FrontImageReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_IMAGE":
      return action.payload;
    default:
      return state;
  }
};

const CourseReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_COURSE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  frontImage: FrontImageReducer,
  course: CourseReducer,
});
