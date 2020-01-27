import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import {
  newStore,
  StoreProvider,
  gameConfiguration,
  gameStartFlag,
  player
} from 'services/Store';

newStore({ gameConfiguration, gameStartFlag, player });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
