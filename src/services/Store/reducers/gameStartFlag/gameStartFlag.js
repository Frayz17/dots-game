import { GAME_START_SET_TRUE, GAME_START_SET_FALSE } from './actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case GAME_START_SET_TRUE:
      return true;
    case GAME_START_SET_FALSE:
      return false;
    default:
      return state;
  }
};
