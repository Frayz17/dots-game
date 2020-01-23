export default (
  state = {
    gameStart: false
  },
  action
) => {
  switch (action.type) {
    case 'GAME_START_SET_TRUE':
      return { gameStart: true };
    case 'GAME_START_SET_FALSE':
      return { gameStart: false };
    default:
      return { ...state };
  }
};
