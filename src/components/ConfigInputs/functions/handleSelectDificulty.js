import { getState } from 'services/Store';
import { chooseGameDificulty } from 'services/Store/reducers/gameDificulty';

export default (event) => {
  const { gameStartFlag } = getState();
  const { dificultiesList } = getState().gameDificulty;

  const nameOfDificulty = event.target.value;
  const selectedDificulty = {
    ...dificultiesList[event.target.value],
    name: nameOfDificulty
  };

  if (gameStartFlag === 'notstarted') {
    chooseGameDificulty(selectedDificulty);
  }
};
