import { getState } from 'services/Store';
import {
  gameStart,
  gameStartFlagReset
} from 'services/Store/reducers/gameStartFlag';
import { boardReset } from 'services/Store/reducers/board';
import { playerReset } from 'services/Store/reducers/player';

const handleFormSubmit = (isSubmitEnabled) => (e) => {
  e.preventDefault();

  const { gameStartFlag } = getState();

  if (isSubmitEnabled) {
    gameStart();
  }
  if (gameStartFlag === 'start' || gameStartFlag === 'stop') {
    gameStartFlagReset();
    boardReset();
    playerReset();
  }
};

export default handleFormSubmit;
