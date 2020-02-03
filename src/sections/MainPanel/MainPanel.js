import React from 'react';
import ConfigInputs from 'components/ConfigInputs';
import { connect } from 'react-redux';
import Board from 'components/Board';
import Box from '@material-ui/core/Box';

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag
  };
})(function MainPanel({ gameStartFlag }) {
  return (
    <Box>
      <ConfigInputs />
      {/* {gameStartFlag ? <Board /> : null} */}
      {gameStartFlag === 'stop' && <div>hello</div>}
      <Board />
    </Box>
  );
});
