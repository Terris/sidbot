import { courseConstants } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case courseConstants.RESET_COURSE:
      return action.payload;
    default:
      return state;
  }
};
