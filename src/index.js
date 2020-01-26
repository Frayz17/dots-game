import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import {
  newStore,
  StoreProvider,
  gameConfiguration,
  gameStartFlag
} from 'services/Store';

newStore({ gameConfiguration, gameStartFlag });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
