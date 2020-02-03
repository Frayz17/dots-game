import { getState } from 'services/Store';
import { chooseGameDificulty } from 'services/Store/reducers/gameDificulty';

export default (event) => {
  const { gameStartFlag } = getState();

  if (gameStartFlag === 'notstarted') {
    chooseGameDificulty(event.target.value);
  }
};
