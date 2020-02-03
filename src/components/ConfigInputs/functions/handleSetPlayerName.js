import { getState } from 'services/Store';
import { setPlayerName } from 'services/Store/reducers/player';

export default (event) => {
  const { gameStartFlag } = getState();

  if (gameStartFlag === 'notstarted') {
    setPlayerName(event.target.value);
  }
};
