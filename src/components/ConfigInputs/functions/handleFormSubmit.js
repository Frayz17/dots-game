import { getState } from 'services/Store';
import { isObjEmpty } from 'utils';
import {
  gameStart,
  gameStartFlagReset
} from 'services/Store/reducers/gameStartFlag';
import { boardReset } from 'services/Store/reducers/board';
import { player_reset } from 'services/Store/reducers/player';

const handleFormSubmit = (e) => {
  e.preventDefault();

  const { dificultySelected } = getState().gameDificulty;
  const { name: playerName } = getState().player;
  const { gameStartFlag } = getState();

  console.log(gameStartFlag === 'start');

  if (
    !isObjEmpty(dificultySelected) &&
    playerName.length > 3 &&
    gameStartFlag !== 'start'
  ) {
    gameStart();
  }
  if (gameStartFlag === 'start' || gameStartFlag === 'stop') {
    gameStartFlagReset();
    boardReset();
    player_reset();
  }
};

export default handleFormSubmit;
