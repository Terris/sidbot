import { combineReducers } from 'redux';
import CourseReducer from './CourseReducer';
import TileReducer from './TileReducer';
import BotReducer from './BotReducer';

const rootReducer = combineReducers({
  course: CourseReducer,
  tile: TileReducer,
  bot: BotReducer
});

export default rootReducer;
