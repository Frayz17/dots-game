import React from 'react';
import { isObjEmpty } from 'utils';
import {
  fieldChangeStatus,
  fieldCounterIncrement,
  tryToCatch
} from './functions';
import Box from '@material-ui/core/Box';
import { getState } from 'services/Store';
import { connect } from 'react-redux';
import StyleBoard from './style/StyleBoard';
import BoardCell from './BoardCell';
import { BuildBoard } from './functions';

export default connect((state) => {
  return {
    dificultySelected: state.gameConfiguration.dificultySelected,
    gameStartFlag: state.gameStartFlag,
    fields: state.board.fields,
    fieldCounter: state.board.fieldCounter,
    playerScore: state.board
  };
})(function Board({ gameStartFlag, fields, fieldCounter, playerScore }) {
  const classes = StyleBoard()();
  const dificultySelected = getState().gameConfiguration.dificultySelected;

  // init fields
  React.useEffect(() => {
    if (!isObjEmpty(dificultySelected)) {
      BuildBoard();
    }
  }, [dificultySelected]);

  const fieldsLength = fields.length;
  const gameStart = gameStartFlag.gameStart;
  const delay = dificultySelected.delay;

  // game logic
  React.useEffect(() => {
    let delayInterval;

    if (gameStart === true && fieldCounter < fieldsLength) {
      fieldChangeStatus(fieldCounter, 'active')();

      delayInterval = setInterval(() => {
        fieldChangeStatus(fieldCounter, 'fail')();
        fieldCounterIncrement();
      }, delay || 2000);
    }

    return () => {
      clearInterval(delayInterval);
    };
  }, [delay, fieldCounter, fieldsLength, gameStart]);

  const boardCells = [];
  for (let i = 0; i < fields.length; i++) {
    boardCells.push(
      <BoardCell
        key={fields[i].id}
        id={fields[i].id}
        status={fields[i].status}
        fieldCounter={fieldCounter}
      />
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.board}>{boardCells}</Box>
    </Box>
  );
});
