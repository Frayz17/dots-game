import { newStore, getStore, getState } from './Store.js';

import StoreProvider from './StoreProvider';
import gameConfiguration from './reducers/gameConfiguration';
import gameStartFlag from './reducers/gameStartFlag';

export {
  newStore,
  getStore,
  getState,
  StoreProvider,
  gameConfiguration,
  gameStartFlag
};
