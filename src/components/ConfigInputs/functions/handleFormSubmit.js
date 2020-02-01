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

/*
import axios from 'axios';

var currentdate = new Date();
var datetime =
  currentdate.getHours() +
  ':' +
  currentdate.getMinutes() +
  ':' +
  currentdate.getSeconds() +
  ' ' +
  currentdate.getDate() +
  '/' +
  (currentdate.getMonth() + 1) +
  '/' +
  currentdate.getFullYear();



 const handleGameFinished = (e) => {
  e.preventDefault();

  axios.post(
    'https://starnavi-frontend-test-task.herokuapp.com/game-settings/winners',
    {
      winner: 'Computer'
    }
  );
};
*/
