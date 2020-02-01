import { getState } from 'services/Store';
import { arrayShuffle } from 'utils';
import { setBoardFields } from 'services/Store/reducers/board';

export default () => {
  const fieldsSide = getState().gameDificulty.dificultySelected.field;

  const allFields = fieldsSide * fieldsSide;
  const collector = [];
  for (let i = 0; i < allFields; i++) {
    collector.push({ id: i, status: 'inactive', catch: null });
  }

  setBoardFields(arrayShuffle(collector));
};
