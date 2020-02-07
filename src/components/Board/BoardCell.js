import React from 'react';
import Box from '@material-ui/core/Box';
import StyleCell from './style/StyleCell';
import { tryToCatch } from './functions';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export default function BoardCell({ id, status }) {
  const classes = StyleCell();

  const handleChangeStatus = () => {
    switch (status) {
      case 'active':
        return blue[500];
      case 'success':
        return green[500];
      case 'fail':
        return red[500];
      case 'inactive':
      default:
        return 'white';
    }
  };

  return (
    <Box
      style={{ backgroundColor: handleChangeStatus() }}
      className={classes.td}
      onClick={tryToCatch(id)}
    ></Box>
  );
}
