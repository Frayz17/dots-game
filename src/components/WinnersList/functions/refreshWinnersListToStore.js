import { setWinnersList } from 'services/Store/reducers/winnersList/actions';
import getWinnersListFromServer from './getWinnersListFromServer';

export default async () => {
  const list = await getWinnersListFromServer();
  list.reverse();

  setWinnersList(list);
};
