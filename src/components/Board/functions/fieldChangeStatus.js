import { getStore, getState } from 'services/Store';

const fieldChangeStatus = (id, status) => () => {
  const { fields } = getState().board;
  const tempFields = fields.map((field) => {
    if (field.id === id && field.status !== 'success') {
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
