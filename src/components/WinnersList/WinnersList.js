import React from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import { refreshWinnersListToStore } from './functions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { winnersListStyle } from './style';

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag,
    winnersList: state.winnersList
  };
})(
  React.memo(function WinnersList({ gameStartFlag, winnersList }) {
    const classes = winnersListStyle();

    React.useEffect(() => {
      refreshWinnersListToStore();
    }, [gameStartFlag]);

    return (
      <Box className={classes.root}>
        <Typography className={classes.title} variant={'h4'}>
          Winners Board
        </Typography>
        <Box className={classes.listWrapper}>
          {winnersList.map((winner) => {
            return (
              <Winner key={winner.id} name={winner.winner} date={winner.date} />
            );
          })}
        </Box>
      </Box>
    );
  })
);
