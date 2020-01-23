export default (
  state = {
    list: {},
    selected: ''
  },
  action
) => {
  switch (action.type) {
    case 'GAME_DIFICULTY_LIST_SET':
      return { ...state, list: { ...action.payload } };
    case 'GAME_DIFICULTY_CHOOSE':
      return { ...state, selected: action.payload };
    default:
      return { ...state };
  }
};
