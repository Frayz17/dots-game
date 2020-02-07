import {
  GAME_DIFICULTY_LIST_SET,
  GAME_DIFICULTY_CHOOSE
} from './actions/actionTypes';

export default (
  state = {
    dificultiesList: {},
    dificultySelected: { field: 10, delay: 1000, name: 'normalMode' }
  },
  action
) => {
  switch (action.type) {
    case GAME_DIFICULTY_LIST_SET:
      return { ...state, dificultiesList: { ...action.payload } };
    case GAME_DIFICULTY_CHOOSE:
      return { ...state, dificultySelected: action.payload };
    default:
      return { ...state };
  }
};
