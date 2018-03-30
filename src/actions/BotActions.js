import { botConstants } from '../constants';
import { botConfig } from '../config';

export function resetBot() {
  return {
    type: botConstants.RESET_BOT,
    payload: botConfig
  }
}
