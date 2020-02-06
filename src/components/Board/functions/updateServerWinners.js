import axios from 'axios';
import { refreshLeadersListToStore } from 'sections/InfoPanel/functions';
import { getState } from 'services/Store';
import { getCurrentDate } from 'utils';

export default async () => {
  const { name, winnerFlag } = getState().player;

  if (winnerFlag === true) {
    try {
      await axios.post(
        'https://starnavi-frontend-test-task.herokuapp.com/winners',
        {
          winner: name,
          date: getCurrentDate()
        }
      );
      refreshLeadersListToStore();
    } catch (error) {
      console.log('cant send data to server ', error);
    }
  }
};
