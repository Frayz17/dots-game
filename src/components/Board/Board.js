import React from 'react';
import Box from '@material-ui/core/Box';
import { getState, gameStartFlag } from 'services/Store';
import { connect } from 'react-redux';
import StyleBoard from './style/StyleBoard';
import BoardCell from './BoardCell';

export default connect((state) => {
  return {
    dificultySelected: state.gameConfiguration.dificultySelected,
    gameStartFlag: state.gameStartFlag
  };
})(function Board({ dificultySelected, gameStartFlag }) {
  const [fields, setFields] = React.useState([]);
  const classes = StyleBoard()();
  // inactive, active, success, fail

  React.useEffect(() => {
    const boardFields = dificultySelected.field * dificultySelected.field;
    const collector = [];
    for (let i = 0; i < boardFields; i++) {
      collector.push({ id: i, status: 'inactive' });
    }

    setFields(collector);
  }, [dificultySelected.field]);

  React.useEffect(() => {
    if (gameStartFlag) {
      const delayInterval = setInterval(() => {}, dificultySelected.delay);
    }
  }, [gameStartFlag, dificultySelected.delay]);

  const cellStatusChange = (id) => {
    const tempFields = fields.map((item) => {
      if (item.id === id) {
      }
    });
  };

  const boardCells = [];
  for (let i = 0; i < fields.length; i++) {
    boardCells.push(<BoardCell id={fields.id} status={fields.status} />);
  }

  return (
    <Box className={classes.root}>
      <div className={classes.board}>{boardCells}</div>
    </Box>
  );
});
