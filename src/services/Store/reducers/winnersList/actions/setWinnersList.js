import { getStore } from 'services/Store';
import { WINNERS_LIST_SET_LIST } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: WINNERS_LIST_SET_LIST,
    payload
  });
};
