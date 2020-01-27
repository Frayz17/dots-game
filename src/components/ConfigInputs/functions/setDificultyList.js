import { getStore } from 'services/Store';
import axios from 'axios';

export default async (event) => {
  try {
    const result = await axios(
      'https://starnavi-frontend-test-task.herokuapp.com/game-settings'
    );

    getStore().dispatch({
      type: 'GAME_DIFICULTY_LIST_SET',
      payload: result.data
    });
  } catch (error) {
    console.error(error);
  }
};
