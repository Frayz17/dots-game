export default (
  state = {
    fields: [],
    fieldCounter: 0,
    playerScore: 0
  },
  action
) => {
  switch (action.type) {
    case 'SET_BOARD_FIELDS':
      return { ...state, fields: action.payload };
    case 'BOARD_FIELD_COUNTER_INCREMENT':
      return { ...state, fieldCounter: state.fieldCounter + 1 };
    case 'BOARD_PLAYER_SCORE_INCREMENT':
      return { ...state, score: state.score + 1 };
    default:
      return { ...state };
  }
};
