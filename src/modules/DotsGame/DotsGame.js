import React from 'react';
import MainPanel from 'sections/MainPanel';
import InfoPanel from 'sections/InfoPanel';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { dotsGameUseStyles } from './style';

export default function DotsGame() {
  const classes = dotsGameUseStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <MainPanel />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoPanel />
        </Grid>
      </Grid>
    </Container>
  );
}
