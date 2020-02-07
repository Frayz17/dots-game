import React from 'react';
import LeadersList from 'components/LeadersList';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '15px 0'
  }
}));

export default React.memo(function InfoPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <LeadersList />
    </Box>
  );
});
