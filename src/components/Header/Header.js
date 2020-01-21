import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './style/useStyles';

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolBar}>
        <Typography variant={'h5'}>Dots Game</Typography>
      </Toolbar>
    </AppBar>
  );
}
