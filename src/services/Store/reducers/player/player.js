import {
  PLAYER_NAME_SET,
  PLAYER_SET_WINNER_FLAG_TRUE,
  PLAYER_SET_WINNER_FLAG_FALSE,
  PLAYER_SET_TIME_START_PLAY,
  PLAYER_SET_TIME_END_PLAY,
  PLAYER_SET_TIME_SCORE,
  PLAYER_RESET_GAME,
  PLAYER_RESET_ALL
} from './actions/actionTypes';

export default (
  state = {
    name: '',
    winnerFlag: null,
    timeStartPlay: 0,
    timeEndPlay: 0,
    timeScore: null
  },
  action
) => {
  switch (action.type) {
    case PLAYER_NAME_SET:
      return { ...state, name: action.payload };
    case PLAYER_SET_WINNER_FLAG_TRUE:
      return { ...state, winnerFlag: true };
    case PLAYER_SET_WINNER_FLAG_FALSE:
      return { ...state, winnerFlag: false };
    case PLAYER_SET_TIME_START_PLAY:
      return { ...state, timeStartPlay: new Date().getTime() };
    case PLAYER_SET_TIME_END_PLAY:
      return { ...state, timeEndPlay: new Date().getTime() };
    case PLAYER_SET_TIME_SCORE:
      return { ...state, timeScore: action.payload };
    case PLAYER_RESET_GAME:
      return {
        ...state,
        winnerFlag: null,
        timeStartPlay: 0,
        timeEndPlay: 0,
        timeScore: null
      };
    case PLAYER_RESET_ALL:
      return {
        name: '',
        winnerFlag: null,
        timeStartPlay: 0,
        timeEndPlay: 0,
        timeScore: null
      };
    default:
      return { ...state };
  }
};
