import { getStore } from 'services/Store';

export default (event) => {
  getStore().dispatch({
    type: 'PLAYER_NAME_SET',
    payload: event.target.value
  });
};
