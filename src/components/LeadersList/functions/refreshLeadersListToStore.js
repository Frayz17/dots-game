import { setLeadersList } from 'services/Store/reducers/leadersList/actions';
import getLeadersListFromServer from './getLeadersListFromServer';

export default async () => {
  const list = await getLeadersListFromServer();
  list.reverse();

  setLeadersList(list);
};
