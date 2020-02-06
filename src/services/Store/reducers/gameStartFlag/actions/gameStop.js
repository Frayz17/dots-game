import { getStore } from 'services/Store';
import { GAME_START_SET_STOP } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: GAME_START_SET_STOP
  });
};
