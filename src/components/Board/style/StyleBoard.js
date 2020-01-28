import { getState } from 'services/Store';
import { makeStyles } from '@material-ui/core/styles';

export default () => {
  const {
    dificultySelected: { field }
  } = getState().gameConfiguration;

  const boardSize = 450;
  const coefficient = 0.8;

  const StyleBoard = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      width: boardSize,
      height: boardSize
    },
    board: {
      display: 'grid',
      gridTemplateColumns: `repeat(${field}, 1fr)`,
      justifyContent: 'center',
      gridTemplateRows: `repeat(${field}, ${boardSize / field}px)`,
      alignItems: 'stretch'
    },
    '@media (max-width: 490px)': {
      root: {
        width: boardSize * coefficient,
        height: boardSize * coefficient
      },
      board: {
        gridTemplateRows: `repeat(${field}, ${(boardSize * coefficient) /
          field}px)`
      }
    }
  }));

  return StyleBoard;
};
