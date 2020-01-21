import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPanel from 'sections/MainPanel';
import InfoPanel from 'sections/InfoPanel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';

function App() {
  return (
    <>
      <CssBaseline />

      <Header />
      <Container>
        <MainPanel />
        <InfoPanel />
      </Container>
      <Footer />
    </>
  );
}

export default App;
