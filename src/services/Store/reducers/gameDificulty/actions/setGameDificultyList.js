import { getStore } from 'services/Store';
import { GAME_DIFICULTY_LIST_SET } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: GAME_DIFICULTY_LIST_SET,
    payload
  });
};
