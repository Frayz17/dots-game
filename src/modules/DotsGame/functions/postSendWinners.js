import axios from 'axios';
import { refreshLeadersListToStore } from 'components/LeadersList/functions';

export default async (winner, date) => {
  try {
    await axios.post(
      'https://starnavi-frontend-test-task.herokuapp.com/winners',
      {
        winner,
        date
      }
    );
    refreshLeadersListToStore();
  } catch (error) {
    console.log('cant send data to server ', error);
  }
};
