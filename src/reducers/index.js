import { combineReducers } from 'redux';
import CourseReducer from './CourseReducer';
import TileReducer from './TileReducer';
import BotReducer from './BotReducer';
import ProgramReducer from './ProgramReducer';
import FunktionsReducer from './FunktionsReducer';

const rootReducer = combineReducers({
  course: CourseReducer,
  tile: TileReducer,
  bot: BotReducer,
  program: ProgramReducer,
  funktions: FunktionsReducer
});

export default rootReducer;
