import { getState } from 'services/Store';
import { setPlayerTimeScore } from 'services/Store/reducers/player';

export default () => {
  const { timeStartPlay } = getState().player;
  const { timeEndPlay } = getState().player;

  setPlayerTimeScore();

  return timeEndPlay - timeStartPlay;
};
