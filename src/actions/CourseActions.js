import { courseConstants } from '../constants';

export function resetCourse() {
  return { type: courseConstants.RESET_COURSE }
}
