import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { getState } from 'services/Store';
import { connect } from 'react-redux';
import useStyles from './style/useStyles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 400,
//     height: 400
//   },
//   board: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(5, 1fr)',
//     justifyContent: 'center',
//     gridTemplateRows: 'repeat(5, 80px)',
//     alignItems: 'stretch'
//   },
//   td: {
//     backgroundColor: 'green',
//     borderLeft: '1px solid black',
//     borderTop: '1px solid black'
//   }
// }));

export default connect((state) => {
  return {
    dificultySelected: state.gameConfiguration.dificultySelected
  };
})(function Board({ dificultySelected }) {
  const classes = useStyles()();
  // console.log(dificultySelected);

  const boardFields = dificultySelected.field * dificultySelected.field;
  const collector = [];
  for (let i = 0; i < boardFields; i++) {
    collector.push(<div key={i} className={classes.td}></div>);
  }

  return (
    <Box className={classes.root}>
      <div className={classes.board}>{collector}</div>
    </Box>
  );
});
