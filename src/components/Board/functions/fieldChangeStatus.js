import { getStore } from 'services/Store';

const fieldChangeStatus = (fields, id, status) => () => {
  const tempFields = fields.map((field) => {
    if (field.id === id) {
      field.status = status;
    }

    return field;
  });

  getStore().dispatch({
    type: 'SET_BOARD_FIELDS',
    payload: tempFields
  });
};

export default fieldChangeStatus;
