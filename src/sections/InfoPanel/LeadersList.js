import React from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';
import getLeadersList from './functions/getLeadersList';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'auto',
    height: 500
  },
  '@media (max-width: 960px)': {
    root: {
      height: 200
    }
  }
}));

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag
  };
})(function LeadersList({ gameStartFlag }) {
  const [leadersList, setLeadersList] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    console.log(gameStartFlag);
    (async () => {
      const list = await getLeadersList();
      list.reverse();

      console.log('>>>>>>>>>>>');
      setLeadersList(list);
    })();
  }, [gameStartFlag]);

  return (
    <Box className={classes.root}>
      {leadersList.map((leader) => {
        return (
          <Leader key={leader.id} name={leader.winner} date={leader.date} />
        );
      })}
    </Box>
  );
});
