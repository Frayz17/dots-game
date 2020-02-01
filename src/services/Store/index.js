import { newStore, getStore, getState } from './Store.js';

import StoreProvider from './StoreProvider';
import gameDificulty from './reducers/gameDificulty';
import gameStartFlag from './reducers/gameStartFlag';
import player from './reducers/player';
import board from './reducers/board';

export {
  newStore,
  getStore,
  getState,
  StoreProvider,
  gameDificulty,
  gameStartFlag,
  player,
  board
};
