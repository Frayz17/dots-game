import React from 'react';
// import { Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center'
  // },
  // tr: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // td: {
  //   width: 30,
  //   height: 30,
  //   backgroundColor: 'green',
  //   borderTop: '1px solid black',
  //   borderLeft: '1px solid black'
  // }
  root: {
    width: 400,
    height: 400
  },
  board: {
    display: 'grid',
    // width: 'calc(4 * 50px)',
    gridTemplateColumns: 'repeat(2, 1fr 1.2fr)',
    justifyContent: 'center',
    // gridTemplateRows: 'repeat(3, 1fr)'
    gridTemplateRows: 'repeat(4, 100px)',
    alignItems: 'stretch'
  },
  td: {
    backgroundColor: 'green',
    border: '1px solid black'
    // width: 50,
    // height: 50
  }
}));

export default function Board() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.board}>
        {/* <div className={classes.tr}> */}
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        {/* </div> */}
        {/* // <div className={classes.tr}> */}
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        {/* // </div> */}
        {/* // <div className={classes.tr}> */}
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        <div className={classes.td}></div>
        {/* // </div> */}
      </div>
    </Box>
  );
}
