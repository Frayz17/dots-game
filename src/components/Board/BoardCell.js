import React from 'react';
import Box from '@material-ui/core/Box';
import StyleCell from './style/StyleCell';

export default function BoardCell({ id, status }) {
  const classes = StyleCell();

  const handleChangeStatus = () => {
    switch (status) {
      case 'active':
        return 'yellow';
      case 'success':
        return 'green';
      case 'fail':
        return 'red';
      default:
        return 'white';
    }
  };

  return (
    <Box
      key={id}
      index={id}
      style={{ backgroundColor: handleChangeStatus() }}
      className={classes.td}
    ></Box>
  );
}
