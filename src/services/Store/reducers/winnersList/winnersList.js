import { WINNERS_LIST_SET_LIST } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case WINNERS_LIST_SET_LIST:
      return action.payload;
    default:
      return state;
  }
};
