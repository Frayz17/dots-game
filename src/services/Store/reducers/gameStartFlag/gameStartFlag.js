import {
  GAME_START_SET_START,
  GAME_START_SET_STOP,
  GAME_START_FLAG_RESET
} from './actionTypes';

export default (state = 'notstarted', action) => {
  switch (action.type) {
    case GAME_START_SET_START:
      return 'start';
    case GAME_START_SET_STOP:
      return 'stop';
    case GAME_START_FLAG_RESET:
      return 'notstarted';
    default:
      return state;
  }
};
