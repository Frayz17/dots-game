import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import infoTextStyle from './style/infoTextStyle';

export default function InfoText({ text }) {
  const classes = infoTextStyle();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text} variant={'subtitle2'}>
        {text}
      </Typography>
    </Box>
  );
}
