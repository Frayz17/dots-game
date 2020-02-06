import { getStore } from 'services/Store';
import { LEADERS_LIST_SET_LIST } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: LEADERS_LIST_SET_LIST,
    payload
  });
};
