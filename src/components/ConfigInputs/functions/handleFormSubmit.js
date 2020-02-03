import { getState } from 'services/Store';
import { isObjEmpty } from 'utils';
import { gameStart } from 'services/Store/reducers/gameStartFlag';

const handleFormSubmit = (e) => {
  e.preventDefault();

  const { dificultySelected } = getState().gameDificulty;
  const { name: playerName } = getState().player;

  if (!isObjEmpty(dificultySelected) && playerName.length > 3) {
    gameStart();
  }
};

export default handleFormSubmit;
