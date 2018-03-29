import { combineReducers } from 'redux';
import CourseReducer from './CourseReducer';

const rootReducer = combineReducers({
  course: CourseReducer
});

export default rootReducer;
