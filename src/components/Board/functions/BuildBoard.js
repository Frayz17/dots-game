import { getStore, getState } from 'services/Store';
import { arrayShuffle } from 'utils';

export default () => {
  const fieldsSide = getState().gameConfiguration.dificultySelected.field;

  const allFields = fieldsSide * fieldsSide;
  const collector = [];
  for (let i = 0; i < allFields; i++) {
    collector.push({ id: i, status: 'inactive', catch: null });
  }

  getStore().dispatch({
    type: 'SET_BOARD_FIELDS',
    payload: arrayShuffle(collector)
  });
};
