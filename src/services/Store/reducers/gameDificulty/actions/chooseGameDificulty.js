import { getStore } from 'services/Store';
import { GAME_DIFICULTY_CHOOSE } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: GAME_DIFICULTY_CHOOSE,
    payload
  });
};
