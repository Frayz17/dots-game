import { getStore } from 'services/Store';

export default () => {
  getStore().dispatch({
    type: 'BOARD_FIELD_COUNTER_INCREMENT'
  });
};
