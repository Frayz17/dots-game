import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import {
  newStore,
  StoreProvider,
  gameDificulty,
  gameStartFlag,
  player,
  board
} from 'services/Store';

newStore({ gameDificulty, gameStartFlag, player, board });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
