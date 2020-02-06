import { getStore } from 'services/Store';
import { PLAYER_SET_WINNER_FLAG_FALSE } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: PLAYER_SET_WINNER_FLAG_FALSE
  });
};
