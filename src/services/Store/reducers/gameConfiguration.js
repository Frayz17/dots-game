export default (
  state = {
    dificultiesList: {},
    dificultySelected: '',
    playerName: ''
  },
  action
) => {
  switch (action.type) {
    case 'GAME_DIFICULTY_LIST_SET':
      return { ...state, dificultiesList: { ...action.payload } };
    case 'GAME_DIFICULTY_CHOOSE':
      return { ...state, dificultySelected: action.payload };
    case 'PLAYER_NAME_SET':
      return { ...state, playerName: action.payload };
    default:
      return { ...state };
  }
};
