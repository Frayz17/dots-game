import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import BoardCell from './BoardCell';
import { isObjEmpty } from 'utils';
import { fieldChangeStatus, BuildBoard, handlerPlayerWin } from './functions';
import {
  fieldCounterIncrement,
  pcScoreIncrement,
  boardReset
} from 'services/Store/reducers/board';
import {
  setPlayerLoose,
  setPlayerTimeStartPlay,
  player_reset
} from 'services/Store/reducers/player';
import { gameStop } from 'services/Store/reducers/gameStartFlag';
import Box from '@material-ui/core/Box';
import StyleBoard from './style/StyleBoard';

export default connect((state) => {
  return {
    dificultySelected: state.gameDificulty.dificultySelected,
    gameStartFlag: state.gameStartFlag,
    fields: state.board.fields,
    fieldCounter: state.board.fieldCounter
  };
})(function Board({ gameStartFlag, fields, fieldCounter }) {
  const classes = StyleBoard()();
  const { dificultySelected } = getState().gameDificulty;
  const { playerScore, pcScore } = getState().board;
  const { timeStartPlay, timeEndPlay, timeScore } = getState().player;
  const fieldsLength = fields.length;
  const delay = dificultySelected.delay;

  // init fields
  React.useEffect(() => {
    if (!isObjEmpty(dificultySelected)) {
      BuildBoard();
    }
  }, [dificultySelected]);

  // init fields
  React.useEffect(() => {
    if (gameStartFlag === 'start') {
      setPlayerTimeStartPlay();
    }
    if (gameStartFlag === 'notstarted' && fieldCounter > 0) {
      boardReset();
      player_reset();
    }
  }, [fieldCounter, gameStartFlag]);

  // game logic
  React.useEffect(() => {
    let delayInterval;
    const halfOfBoardFields = Math.ceil(fieldsLength / 2);

    if (gameStartFlag === 'start') {
      if (playerScore >= halfOfBoardFields && halfOfBoardFields > 0) {
        gameStop();
        handlerPlayerWin();
      } else if (pcScore >= halfOfBoardFields) {
        gameStop();
        setPlayerLoose();
        fieldChangeStatus(fieldCounter, '');
      } else if (fieldCounter <= fieldsLength) {
        fieldChangeStatus(fieldCounter, 'active');

        delayInterval = setInterval(() => {
          fieldChangeStatus(fieldCounter, 'fail');
          fieldCounterIncrement();
          pcScoreIncrement();
        }, delay || 2000);
      }
    }

    return () => {
      clearInterval(delayInterval);
    };
  }, [
    delay,
    fieldCounter,
    fieldsLength,
    gameStartFlag,
    pcScore,
    playerScore,
    timeScore
  ]);

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
