import { newStore, getStore, getState } from './Store.js';

import StoreProvider from './StoreProvider';
import gameConfiguration from './reducers/gameConfiguration';
import gameStartFlag from './reducers/gameStartFlag';
import player from './reducers/player';
import board from './reducers/board';

export {
  newStore,
  getStore,
  getState,
  StoreProvider,
  gameConfiguration,
  gameStartFlag,
  player,
  board
};
