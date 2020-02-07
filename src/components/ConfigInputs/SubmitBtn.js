import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styleBtnSumit from './style/styleBtnSumit';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ad1457'
    }
  }
});

export default connect((state) => {
  return {
    gameStartFlag: state.gameStartFlag
  };
})(
  React.memo(function submitBtn({ gameStartFlag, isSubmitEnabled }) {
    const classes = styleBtnSumit();

    let text = 'play';
    let btnColor = 'primary';

    if (gameStartFlag === 'start' || gameStartFlag === 'stop') {
      text = 'play again';
      btnColor = 'secondary';
    }

    return (
      <ThemeProvider theme={theme}>
        <Button
          className={classes.btnSubmit}
          type='submit'
          variant='contained'
          color={btnColor}
          disabled={!isSubmitEnabled}
        >
          {text}
        </Button>
      </ThemeProvider>
    );
  })
);
