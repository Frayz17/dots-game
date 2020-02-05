import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import styleBtnSumit from './style/styleBtnSumit';

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag
  };
})(function submitBtn({ gameStartFlag }) {
  const classes = styleBtnSumit();

  let text = 'play';

  if (gameStartFlag === 'start' || gameStartFlag === 'stop') {
    text = 'play again';
  }

  return (
    <Button
      className={classes.btnSubmit}
      type="submit"
      variant="contained"
      color="primary"
    >
      {text}
    </Button>
  );
});
