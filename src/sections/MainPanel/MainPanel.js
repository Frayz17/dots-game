import React from 'react';
import ConfigInputs from 'components/ConfigInputs';
import InfoText from 'components/InfoText';
import Board from 'components/Board';
import Box from '@material-ui/core/Box';

export default function MainPanel() {
  return (
    <Box>
      <ConfigInputs />
      <InfoText />
      <Board />
    </Box>
  );
}
