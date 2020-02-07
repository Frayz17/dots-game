import { getStore } from 'services/Store';
import { PLAYER_RESET_ALL } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: PLAYER_RESET_ALL
  });
};
