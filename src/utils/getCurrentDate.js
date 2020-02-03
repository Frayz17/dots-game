function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export default () => {
  const currentdate = new Date();
  const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
  const month = monthFormatter.format(currentdate);

  const datetime =
    addZero(currentdate.getHours()) +
    ':' +
    addZero(currentdate.getMinutes()) +
    '; ' +
    currentdate.getDate() +
    ' ' +
    month +
    ' ' +
    currentdate.getFullYear();

  return datetime;
};
