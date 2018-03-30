import { tileConstants } from '../constants';
import { tileConfig } from '../config';

const initialState = tileConfig;

export default function(state = initialState, action) {
  switch (action.type) {
    case tileConstants.RESET_TILE:
      return action.payload;
    default:
      return state;
  }
};
