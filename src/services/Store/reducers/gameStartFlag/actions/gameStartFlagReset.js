import { getStore } from 'services/Store';
import { GAME_START_FLAG_RESET } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: GAME_START_FLAG_RESET
  });
};
