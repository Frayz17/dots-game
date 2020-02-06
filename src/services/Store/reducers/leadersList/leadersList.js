import { LEADERS_LIST_SET_LIST } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case LEADERS_LIST_SET_LIST:
      return action.payload;
    default:
      return state;
  }
};
