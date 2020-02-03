import { getState } from 'services/Store';
import {
  fieldCounterIncrement,
  playerScoreIncrement
} from 'services/Store/reducers/board';
import { setBoardFields } from 'services/Store/reducers/board';

export default (id) => () => {
  const { fieldCounter, fields } = getState().board;
  const { gameStartFlag } = getState();

  if (fieldCounter === id && gameStartFlag === 'start') {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        field.status = 'success';
      }

      return field;
    });

    setBoardFields(updatedFields);
    fieldCounterIncrement();
    playerScoreIncrement();
  }
};
