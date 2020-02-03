import { setPlayerLoose } from 'services/Store/reducers/player';
import { gameStop } from 'services/Store/reducers/gameStartFlag';

export default () => {
  setPlayerLoose();
  gameStop();
};
