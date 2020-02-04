import axios from 'axios';
import { getState } from 'services/Store';
import { getCurrentDate } from 'utils';

export default () => {
  const { name, winnerFlag } = getState().player;

  if (winnerFlag) {
    // axios.post(
    //   'https://starnavi-frontend-test-task.herokuapp.com/game-settings/winners',
    //   {
    //     winner: name,
    //     date: getCurrentDate()
    //   }
    // );
  }
};
