import { botConstants } from '../constants';
import { botConfig } from '../config';

const initialState = botConfig;

export default function(state = initialState, action) {
  switch (action.type) {
    case botConstants.RESET_BOT:
      return action.payload;
    default:
      return state;
  }
};
