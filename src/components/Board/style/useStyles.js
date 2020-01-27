import { getState } from 'services/Store';
import { makeStyles } from '@material-ui/core/styles';

// console.log(getState());
// const { dificultySelected } = getState().gameConfiguration;
// console.log('dificultySelected', dificultySelected);

export default () => {
  const {
    dificultySelected: { field, delay }
  } = getState().gameConfiguration;

  const boardSize = 450;
  const coefficient = 0.8;

  const useStyles = makeStyles((theme) => ({
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
    td: {
      backgroundColor: 'green',
      borderLeft: '1px solid black',
      borderTop: '1px solid black'
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

  return useStyles;
};
