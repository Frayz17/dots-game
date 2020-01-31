import React from 'react';
import { isObjEmpty } from 'functions';
import { fieldChangeStatus } from './functions';
import { fieldCounterIncrement } from './functions';
import Box from '@material-ui/core/Box';
import { getState } from 'services/Store';
import { connect } from 'react-redux';
import StyleBoard from './style/StyleBoard';
import BoardCell from './BoardCell';
import { setBoardFields } from './functions';

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
      setBoardFields();
    }
  }, [dificultySelected]);

  const fieldsLength = fields.length;
  const gameStart = gameStartFlag.gameStart;
  const delay = dificultySelected.delay;

  // game logic
  React.useEffect(() => {
    let delayInterval;

    if (gameStart === true && fieldCounter < fieldsLength) {
      fieldChangeStatus(fields, fieldCounter, 'active')();

      delayInterval = setInterval(() => {
        fieldChangeStatus(fields, fieldCounter, 'success')();
        fieldCounterIncrement();
      }, delay || 2000);
    }

    return () => {
      clearInterval(delayInterval);
    };
  }, [fieldCounter, fieldsLength, gameStart]);

  const isCatch = (id) => {
    const tempFields = fields.map((field) => {
      if (field.id === id && field.status === 'active') {
        field.status = 'success';
      }

      return field;
    });

    // setFields(tempFields);
  };

  const tryToCatch = () => {
    const tempFields = [...fields];
    tempFields[fieldCounter].status = 'success';

    // setFields(tempFields);
  };

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
