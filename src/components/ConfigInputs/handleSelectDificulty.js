import { getStore, getState } from 'services/Store';

export default (event) => {
  const { gameStart } = getState().gameStartFlag;

  if (!gameStart) {
    getStore().dispatch({
      type: 'GAME_DIFICULTY_CHOOSE',
      payload: event.target.value
    });
  }
};
