import React from 'react';
import ConfigInputs from 'components/ConfigInputs';
import Board from 'components/Board';
import Box from '@material-ui/core/Box';

export default function MainPanel() {
  return (
    <Box>
      <ConfigInputs />
      <Board />
    </Box>
  );
}
