import { getState } from 'services/Store';
import { isObjEmpty } from 'utils';
import {
  gameStart,
  gameStartFlagReset
} from 'services/Store/reducers/gameStartFlag';

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
  if (gameStartFlag === 'start') {
    gameStartFlagReset();
  }
};

export default handleFormSubmit;
