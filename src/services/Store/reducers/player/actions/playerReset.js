import { getStore } from 'services/Store';
import { PLAYER_RESET } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: PLAYER_RESET
  });
};
