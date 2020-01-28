export default (
  state = {
    fields: [],
    delay: 1000
  },
  action
) => {
  switch (action.type) {
    case 'GAME_DIFICULTY_LIST_SET':
      return { ...state, dificultiesList: { ...action.payload } };
    case 'GAME_DIFICULTY_CHOOSE':
      return { ...state, dificultySelected: action.payload };
    default:
      return { ...state };
  }
};
