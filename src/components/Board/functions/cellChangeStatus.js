export default (fields, id, status) => () => {
  const tempFields = fields.map((field) => {
    if (field.id === id) {
      field.status = status;
    }

    return field;
  });

  return tempFields;
};
