export default (string) => {
  return (
    string.charAt(0).toUpperCase() +
    string.substring(1).replace(/([a-z])([A-Z])/, '$1 $2')
  );
};
