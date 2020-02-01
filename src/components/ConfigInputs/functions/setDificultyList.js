import { setGameDificultyList } from 'services/Store/reducers/gameDificulty';
import axios from 'axios';

export default async (event) => {
  try {
    const result = await axios(
      'https://starnavi-frontend-test-task.herokuapp.com/game-settings'
    );

    setGameDificultyList(result.data);
  } catch (error) {
    console.error(error);
  }
};
