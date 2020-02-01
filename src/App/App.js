import React from 'react';
import Header from 'components/Header';
import DotsGame from 'modules/DotsGame';
import Footer from 'components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import './style/global.css';
import { useStyles } from './style';
import 'typeface-roboto';

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />

      <Header />
      <Box className={classes.gameWrapper}>
        <DotsGame />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
