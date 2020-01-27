import { getStore, getState } from 'services/Store';

export default (event) => {
  const { gameStart } = getState().gameStartFlag;

  if (!gameStart) {
    getStore().dispatch({
      type: 'PLAYER_NAME_SET',
      payload: event.target.value
    });
  }
};
