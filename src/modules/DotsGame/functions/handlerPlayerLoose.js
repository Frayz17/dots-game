import { setPlayerLoose } from 'services/Store/reducers/player';
import { gameStop } from 'services/Store/reducers/gameStartFlag';
import updateServerWinners from './updateServerWinners';

export default () => {
  gameStop();
  setPlayerLoose();
  updateServerWinners();
};
