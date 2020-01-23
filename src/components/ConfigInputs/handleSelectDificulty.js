import { getStore } from 'services/Store';

export default (event) => {
  getStore().dispatch({
    type: 'GAME_DIFICULTY_CHOOSE',
    payload: event.target.value
  });
};
