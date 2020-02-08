import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import {
  newStore,
  StoreProvider,
  gameDificulty,
  gameStartFlag,
  player,
  board,
  winnersList
} from 'services/Store';

newStore({ gameDificulty, gameStartFlag, player, board, winnersList });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
