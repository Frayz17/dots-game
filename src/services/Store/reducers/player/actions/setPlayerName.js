import { getStore } from 'services/Store';
import { PLAYER_NAME_SET } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: PLAYER_NAME_SET,
    payload
  });
};
