import { getStore } from 'services/Store';
import { PLAYER_SET_TIME_END_PLAY } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: PLAYER_SET_TIME_END_PLAY
  });
};
