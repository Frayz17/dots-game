import axios from 'axios';
import { refreshWinnersListToStore } from 'components/WinnersList/functions';

export default async (winner, date) => {
  try {
    await axios.post(
      'https://starnavi-frontend-test-task.herokuapp.com/winners',
      {
        winner,
        date
      }
    );
    refreshWinnersListToStore();
  } catch (error) {
    console.log('cant send data to server ', error);
  }
};
