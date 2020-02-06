import postSendWinners from './postSendWinners';
import { getState } from 'services/Store';
import { getCurrentDate } from 'utils';

export default async () => {
  const { name, winnerFlag } = getState().player;
  const currentDate = getCurrentDate();

  if (winnerFlag === true) {
    postSendWinners(name, currentDate);
  }
  if (winnerFlag === false) {
    postSendWinners('Computer', currentDate);
  }
};
