import { getStore } from 'services/Store';
import { PLAYER_RESET_GAME } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: PLAYER_RESET_GAME
  });
};
