import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import infoTextStyle from './style/infoTextStyle';

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag,
    winnerFlag: state.player.winnerFlag
  };
})(function InfoText({ gameStartFlag, winnerFlag }) {
  const classes = infoTextStyle();
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
      text = 'Welcome to our Game!';
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
    <Box className={classes.root}>
      <Typography className={classes.text} variant={'subtitle1'}>
        {text}
      </Typography>
    </Box>
  );
});
