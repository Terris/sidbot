import { botConstants } from '../constants';
import { botConfig } from '../config';

export function resetBot() {
  return {
    type: botConstants.RESET_BOT,
    payload: botConfig
  }
}

export function moveBotLeft() {
  return {
    type: botConstants.MOVE_BOT_LEFT
  }
}

export function moveBotRight() {
  return {
    type: botConstants.MOVE_BOT_RIGHT
  }
}
