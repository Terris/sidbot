import { botConstants } from '../constants';
import { botConfig } from '../config';

const initialState = botConfig;

export default function(state = initialState, action) {
  switch (action.type) {
    case botConstants.RESET_BOT:
      return action.payload;
    case botConstants.MOVE_BOT_LEFT:
      return {...state, tile_id: state.tile_id -1, transition: "infromright" };
    case botConstants.MOVE_BOT_RIGHT:
      return {...state, tile_id: state.tile_id +1, transition: "infromleft" };
    default:
      return {...state};
  }
};
