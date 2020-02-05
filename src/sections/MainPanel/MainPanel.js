import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import ConfigInputs from 'components/ConfigInputs';
import InfoText from 'components/InfoText';
import Board from 'components/Board';
import Box from '@material-ui/core/Box';

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag,
    winnerFlag: state.player.winnerFlag
  };
})(function MainPanel({ gameStartFlag, winnerFlag }) {
  const { name } = getState().player;

  let text = '';
  let resultGameMsg = '';

  if (winnerFlag === true) {
    resultGameMsg = `Player ${name} is winner!`;
  } else if (winnerFlag === false) {
    resultGameMsg = `Player ${name} loose.`;
  }

  switch (gameStartFlag) {
    case 'notstarted':
      text = 'Choose game dificulty, name and press play button';
      break;
    case 'start':
      text = 'Press on blue squares.';
      break;
    case 'stop':
      text = resultGameMsg;
      break;
    default:
      text = '';
  }

  return (
    <Box>
      <ConfigInputs />
      <InfoText text={text} />
      <Board />
    </Box>
  );
});
