export default (
  state = {
    name: '',
    winnerFlag: null,
    time: null
  },
  action
) => {
  switch (action.type) {
    case 'PLAYER_NAME_SET':
      return { ...state, name: action.payload };
    case 'PLAYER_WINNER_FLAG_SET':
      return { ...state, winnerFlag: action.payload };
    case 'PLAYER_TIME_SET':
      return { ...state, time: action.payload };
    default:
      return { ...state };
  }
};
