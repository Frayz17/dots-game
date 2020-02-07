import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default React.memo(function Leader({ name, date }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant={'subtitle2'}>{name}</Typography>
      <Typography variant={'subtitle2'}>{date}</Typography>
    </Box>
  );
});
