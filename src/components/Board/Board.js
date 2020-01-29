import React from 'react';
import Box from '@material-ui/core/Box';
import { getState, gameStartFlag } from 'services/Store';
import { connect } from 'react-redux';
import StyleBoard from './style/StyleBoard';
import BoardCell from './BoardCell';
import arrayShuffle from 'functions/arrayShuffle';

export default connect((state) => {
  return {
    dificultySelected: state.gameConfiguration.dificultySelected,
    gameStartFlag: state.gameStartFlag
  };
})(function Board({ dificultySelected, gameStartFlag }) {
  const [fields, setFields] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const classes = StyleBoard()();

  // init fields
  React.useEffect(() => {
    const allFields = dificultySelected.field * dificultySelected.field;
    const collector = [];
    for (let i = 0; i < allFields; i++) {
      collector.push({ id: i, status: 'inactive', catch: null });
    }

    setFields(arrayShuffle(collector));
  }, [dificultySelected.field]);

  const fieldsLength = fields.length;
  const gameStart = gameStartFlag.gameStart;
  const delay = dificultySelected.delay;

  // game logic
  React.useEffect(() => {
    let delayInterval;

    if (gameStartFlag.gameStart === true && counter < fieldsLength) {
      const newFields = [...fields];
      newFields[counter] = { ...newFields[counter], status: 'active' };
      cellChangeStatus(counter, 'active')();

      delayInterval = setInterval(() => {
        cellChangeStatus(counter, 'success')();
        setCounter(counter + 1);
      }, delay || 2000);
    }

    return () => {
      clearInterval(delayInterval);
    };
  }, [gameStart, counter, fieldsLength]);

  const cellChangeStatus = (id, status) => () => {
    const tempFields = fields.map((field) => {
      if (field.id === id) {
        field.status = status;
      }

      return field;
    });

    setFields(tempFields);
  };

  const isCatch = (id) => {
    const tempFields = fields.map((field) => {
      if (field.id === id && field.status === 'active') {
        field.status = 'success';
      }

      return field;
    });

    setFields(tempFields);
  };

  const boardCells = [];
  for (let i = 0; i < fields.length; i++) {
    boardCells.push(
      <BoardCell
        key={fields[i].id}
        id={fields[i].id}
        status={fields[i].status}
        counter={counter}
        cellChangeStatus={cellChangeStatus}
      />
    );
  }

  return (
    <Box className={classes.root}>
      <div className={classes.board}>{boardCells}</div>
    </Box>
  );
});
