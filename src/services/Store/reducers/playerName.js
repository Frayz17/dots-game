export default (
  state = {
    playerName: ''
  },
  action
) => {
  switch (action.type) {
    case 'PLAYER_NAME_SET':
      return { playerName: action.payload };
    default:
      return { ...state };
  }
};
