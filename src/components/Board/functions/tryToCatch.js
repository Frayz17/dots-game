import { getStore, getState } from 'services/Store';
import fieldCounterIncrement from './fieldCounterIncrement';

export default (id) => () => {
  const { fieldCounter, fields } = getState().board;
  const { gameStart } = getState().gameStartFlag;

  if (fieldCounter === id && gameStart === true) {
    const tempFields = fields.map((field) => {
      if (field.id === id) {
        field.status = 'success';
      }

      return field;
    });

    getStore().dispatch({
      type: 'SET_BOARD_FIELDS',
      payload: tempFields
    });
    fieldCounterIncrement();
  }
};
