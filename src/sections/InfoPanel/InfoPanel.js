import React from 'react';
import LeaderList from './LeadersList';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '15px 0'
  },
  title: {
    textAlign: 'center'
  }
}));

export default function InfoPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant={'h4'}>
        Leader Board
      </Typography>
      <LeaderList />
    </Box>
  );
}
