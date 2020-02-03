import { getStore, getState } from 'services/Store';
import { PLAYER_SET_TIME_SCORE } from './actionTypes';

export default () => {
  const { timeStartPlay } = getState().player;
  const { timeEndPlay } = getState().player;

  if (timeEndPlay > timeStartPlay) {
    console.log('timeStartPlay', timeStartPlay);
    console.log('timeEndPlay', timeEndPlay);
    getStore().dispatch({
      type: PLAYER_SET_TIME_SCORE,
      payload: timeEndPlay - timeStartPlay
    });
  }
};
