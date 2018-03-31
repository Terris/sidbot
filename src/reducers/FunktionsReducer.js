import { funktionConstants, botConstants } from '../constants';

const initialState = {
  1: {
    id: 1,
    name: "Move Right",
    bot_action: botConstants.MOVE_BOT_RIGHT
  },
  2: {
    id: 2,
    name: "Move Left",
    bot_action: botConstants.MOVE_BOT_LEFT
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case funktionConstants.FETCH_FUNKTIONS:
      return {...state};
    default:
      return {...state};
  }
};
