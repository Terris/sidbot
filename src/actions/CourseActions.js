import { courseConstants } from '../constants';
import { courseConfig } from '../config';

export function resetCourse() {
  return {
    type: courseConstants.RESET_COURSE,
    payload: courseConfig
  }
}
