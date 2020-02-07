import React from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';
import { refreshLeadersListToStore } from './functions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'auto',
    height: 500
  },
  title: {
    textAlign: 'center'
  },
  '@media (max-width: 960px)': {
    root: {
      height: 200
    }
  }
}));

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag,
    leadersList: state.leadersList
  };
})(
  React.memo(function LeadersList({ gameStartFlag, leadersList }) {
    const classes = useStyles();

    React.useEffect(() => {
      refreshLeadersListToStore();
    }, [gameStartFlag]);

    return (
      <Box className={classes.root}>
        <Typography className={classes.title} variant={'h4'}>
          Leader Board
        </Typography>
        {leadersList.map((leader) => {
          return (
            <Leader key={leader.id} name={leader.winner} date={leader.date} />
          );
        })}
      </Box>
    );
  })
);
