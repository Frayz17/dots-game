import React from 'react';
import WinnersList from 'components/WinnersList';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15
  }
}));

export default React.memo(function InfoPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <WinnersList />
    </Box>
  );
});
