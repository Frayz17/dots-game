import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${grey[300]}`,
    marginTop: 10
  }
}));

export default React.memo(function Winner({ name, date }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant={'subtitle2'}>{name}</Typography>
      <Typography variant={'subtitle2'}>{date}</Typography>
    </Box>
  );
});
