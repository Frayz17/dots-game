import React from 'react';
import ConfigInputs from 'components/ConfigInputs';
import InfoText from 'components/InfoText';
import Board from 'components/Board';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('md')]: {
    root: {
      marginBottom: 20
    }
  }
}));

export default function MainPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ConfigInputs />
      <InfoText />
      <Board />
    </Box>
  );
}
