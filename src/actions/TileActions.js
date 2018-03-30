import { tileConstants } from '../constants';
import { tileConfig } from '../config';

export function resetTiles() {
  return {
    type: tileConstants.RESET_TILES,
    payload: tileConfig
  }
}
