import React from 'react';
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

export default function LeadersList() {
  const [leadersList, setLeadersList] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    (async () => {
      const list = await getLeadersList();
      setLeadersList(list);
    })();
  }, []);

  return (
    <Box className={classes.root}>
      {leadersList.map((leader) => {
        return (
          <Leader key={leader.id} name={leader.winner} date={leader.date} />
        );
      })}
    </Box>
  );
}
