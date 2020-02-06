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
  leadersList
} from 'services/Store';

newStore({ gameDificulty, gameStartFlag, player, board, leadersList });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
