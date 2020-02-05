import axios from 'axios';
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
    } catch (error) {
      console.log('cant send data to server ', error);
    }
  }
};
