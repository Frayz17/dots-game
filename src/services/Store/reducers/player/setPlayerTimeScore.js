import { getStore } from 'services/Store';
import { PLAYER_SET_TIME_SCORE } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: PLAYER_SET_TIME_SCORE,
    payload
  });
};
