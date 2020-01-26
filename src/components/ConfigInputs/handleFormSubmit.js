import { getStore, getState } from 'services/Store';
import isObjEmpty from 'functions/isObjEmpty';

const handleFormSubmit = (e) => {
  e.preventDefault();

  const { dificultySelected, playerName } = getState().gameConfiguration;

  if (!isObjEmpty(dificultySelected) && playerName.length > 3) {
    console.log(dificultySelected, playerName);
    getStore().dispatch({
      type: 'GAME_START_SET_TRUE'
    });
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
