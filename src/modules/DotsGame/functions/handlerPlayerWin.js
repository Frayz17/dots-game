import updateServerWinners from './updateServerWinners';
import {
  setPlayerWin,
  setPlayerTimeEndPlay,
  setPlayerTimeScore
} from 'services/Store/reducers/player';
import { gameStop } from 'services/Store/reducers/gameStartFlag';

export default () => {
  gameStop();
  setPlayerTimeEndPlay();
  setPlayerWin();
  setPlayerTimeScore();
  updateServerWinners();
};
