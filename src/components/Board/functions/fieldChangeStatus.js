import { getState } from 'services/Store';
import { setBoardFields } from 'services/Store/reducers/board';

const fieldChangeStatus = (id, status) => {
  const { fields } = getState().board;

  const updatedFields = fields.map((field) => {
    if (field.id === id && field.status !== 'success') {
      field.status = status;
    }

    return field;
  });

  setBoardFields(updatedFields);
};

export default fieldChangeStatus;
